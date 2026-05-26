import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_DIR = path.join(__dirname, '../docs');
const OUTPUT_DIR = path.join(__dirname, '../exports');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 递归获取所有 .md/.mdx 文件的绝对路径
function getAllMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllMarkdownFiles(fullPath, fileList);
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

// 从文件路径提取 (version, lang, module)
function extractMetaFromPath(fullPath) {
  const relative = path.relative(DOCS_DIR, fullPath);
  const parts = relative.split(path.sep);
  if (parts.length >= 3 && !parts[2].includes('.')) {
    return {
      version: parts[0],
      lang: parts[1],
      module: parts[2],
    };
  }
  return null;
}

// 按 (version, lang, module) 分组
function groupFilesByVersionLangModule(files) {
  const groups = new Map();
  for (const filePath of files) {
    const meta = extractMetaFromPath(filePath);
    if (!meta) continue;
    const key = `${meta.version}|${meta.lang}|${meta.module}`;
    if (!groups.has(key)) {
      groups.set(key, { ...meta, files: [] });
    }
    groups.get(key).files.push(filePath);
  }
  return groups;
}

/**
 * 递归解析 _meta.json 中的 items，生成文件顺序列表（相对于模块根目录的路径，不含扩展名）
 * @param {Array} items - _meta.json 中的 items 数组
 * @param {string} currentDir - 当前所处的相对路径（相对于模块根目录）
 * @returns {Array<string>} 排序后的文件路径列表（如 ['getting-started/index', 'getting-started/installation', ...]）
 */
function parseMetaItems(items, currentDir = '') {
  const result = [];
  for (const item of items) {
    if (typeof item === 'string') {
      // 普通文件项
      const filePath = currentDir ? `${currentDir}/${item}` : item;
      result.push(filePath);
    } else if (typeof item === 'object') {
      const type = item.type || 'file';
      const name = item.name;
      if (type === 'dir') {
        // 目录项：进入子目录，处理其 items
        const subDir = currentDir ? `${currentDir}/${name}` : name;
        if (item.items && Array.isArray(item.items)) {
          const subItems = parseMetaItems(item.items, subDir);
          result.push(...subItems);
        } else {
          // 如果没有 items，可能该目录下没有需要导出的文件，忽略
          console.warn(`  警告: 目录 ${subDir} 没有 items 字段，跳过`);
        }
      } else if (type === 'file') {
        // 文件项
        const filePath = currentDir ? `${currentDir}/${name}` : name;
        result.push(filePath);
      } else {
        console.warn(`  未知类型: ${type}，跳过`);
      }
    }
  }
  return result;
}

/**
 * 读取模块根目录下的 _meta.json，返回文件顺序映射（路径 -> 顺序索引）
 * @param {string} moduleRootPath - 模块根目录的绝对路径，如 docs/v1.0/zh/cli
 * @returns {Map<string, number> | null} 顺序映射，如果文件不存在或解析失败则返回 null
 */
function getOrderFromMetaJson(moduleRootPath) {
  const metaPath = path.join(moduleRootPath, '_meta.json');
  if (!fs.existsSync(metaPath)) {
    return null;
  }
  try {
    const metaContent = fs.readFileSync(metaPath, 'utf-8');
    const meta = JSON.parse(metaContent);
    if (!Array.isArray(meta)) {
      console.warn(`  ${metaPath} 的根元素不是数组，跳过`);
      return null;
    }
    const orderedPaths = parseMetaItems(meta, '');
    const orderMap = new Map();
    orderedPaths.forEach((p, idx) => {
      // 标准化路径分隔符为 posix 风格（/）
      const normalizedPath = p.replace(/\\/g, '/');
      orderMap.set(normalizedPath, idx);
    });
    return orderMap;
  } catch (err) {
    console.warn(`  警告: 解析 ${metaPath} 失败:`, err.message);
    return null;
  }
}

/**
 * 对模块内的文件列表按照 _meta.json 的顺序排序
 * @param {Array<string>} files - 文件绝对路径数组
 * @param {string} moduleRootPath - 模块根目录的绝对路径
 * @returns {Array<string>} 排序后的文件绝对路径数组
 */
function sortFilesByMetaOrder(files, moduleRootPath) {
  const orderMap = getOrderFromMetaJson(moduleRootPath);
  if (!orderMap) {
    // 没有 _meta.json 则按默认字母序排序
    return files.sort();
  }

  // 为每个文件计算相对于模块根目录的路径（不含扩展名，使用 posix 分隔符）
  const fileWithRelPath = files.map(filePath => {
    const relative = path.relative(moduleRootPath, filePath);
    // 去掉扩展名，并将 Windows 反斜杠转为正斜杠
    const withoutExt = relative.replace(/\.(md|mdx)$/, '').replace(/\\/g, '/');
    return { filePath, relPath: withoutExt };
  });

  // 排序：有顺序的按顺序，没有的排在最后（按字母序）
  fileWithRelPath.sort((a, b) => {
    const orderA = orderMap.has(a.relPath) ? orderMap.get(a.relPath) : Infinity;
    const orderB = orderMap.has(b.relPath) ? orderMap.get(b.relPath) : Infinity;
    if (orderA !== orderB) return orderA - orderB;
    return a.relPath.localeCompare(b.relPath);
  });

  return fileWithRelPath.map(item => item.filePath);
}

// 合并一组文件为一个 Markdown 文件
function mergeFilesToSingleMd(files, outputPath, baseDir = DOCS_DIR) {
  let combined = '';
  for (const filePath of files) {
    const relative = path.relative(baseDir, filePath);
    combined += `## ${relative}\n\n`;
    const content = fs.readFileSync(filePath, 'utf-8');
    combined += content + '\n\n---\n\n';
  }
  fs.writeFileSync(outputPath, combined);
}

function exportByVersionLangModule() {
  ensureDir(OUTPUT_DIR);
  const allFiles = getAllMarkdownFiles(DOCS_DIR);
  if (allFiles.length === 0) {
    console.log('未找到任何 Markdown 文件，请检查 DOCS_DIR 路径。');
    return;
  }

  const groups = groupFilesByVersionLangModule(allFiles);
  console.log(`找到 ${groups.size} 个模块组。`);

  for (const [key, group] of groups.entries()) {
    const { version, lang, module, files } = group;

    // 获取模块的根目录路径（例如 docs/v1.0/zh/cli）
    const moduleRootPath = path.join(DOCS_DIR, version, lang, module);
    // 按照嵌套 _meta.json 顺序排序
    const sortedFiles = sortFilesByMetaOrder(files, moduleRootPath);

    const fileName = `${module}_${lang}_${version}.md`;
    const outputPath = path.join(OUTPUT_DIR, fileName);
    mergeFilesToSingleMd(sortedFiles, outputPath);
    console.log(`✅ 生成: ${fileName} (包含 ${sortedFiles.length} 个文件，已按嵌套 _meta.json 排序)`);
  }

  console.log(`\n🎉 导出完成！输出目录: ${OUTPUT_DIR}`);
}

exportByVersionLangModule();