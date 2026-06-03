import React from 'react';
import CommandPanel from '../../components/CommandPanel';

interface HeroProps {
  hero?: {
    name?: string;
    text?: string;
    tagline?: string;
    actions?: Array<{ theme: string; text: string; link: string }>;
    image?: { src: string; alt: string };
  };
}

export const MyHero: React.FC<HeroProps> = ({ hero }) => {
  // 防御性编程：如果没有 hero，或者 hero 为空对象，给出默认结构或返回 null
  if (!hero || Object.keys(hero).length === 0) {
    return null; // 或者显示一个默认的占位
  }

  return (
    <div className="rp-home-hero">
      <div className="rp-home-hero__main">
        <div className="rp-home-hero__text">
          {hero.name && <h1 className="rp-home-hero__name">{hero.name}</h1>}
          {hero.text && <p className="rp-home-hero__text">{hero.text}</p>}
          {hero.tagline && <p className="rp-home-hero__tagline">{hero.tagline}</p>}
          {hero.actions && hero.actions.length > 0 && (
            <div className="rp-home-hero__actions">
              {hero.actions.map((action, idx) => (
                <a
                  key={idx}
                  href={action.link}
                  className={`rp-home-hero__action rp-home-hero__action--${action.theme}`}
                >
                  {action.text}
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="rp-home-hero__image">
          <CommandPanel />
        </div>
      </div>
    </div>
  );
};