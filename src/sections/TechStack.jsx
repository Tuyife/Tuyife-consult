import { useState } from 'react';
import { TECH_STACK } from '../data/content';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import styles from './TechStack.module.css';

export default function TechStack() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="tech" className={`section ${styles.tech}`}>
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <SectionHeading
          eyebrow="Tech Stack"
          title={
            <>
              Tools of the <span className="gradient">Modern Craft</span>
            </>
          }
          sub="We work with battle-tested, industry-leading technologies to ship products that are fast, secure, and built to scale."
          align="center"
        />

        <div className={styles.grid}>
          {TECH_STACK.map((tech, i) => (
            <Reveal key={tech.name} type="scale" delay={(i % 5) * 0.06} className={styles.cellWrap}>
              <button
                className={styles.cell}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered(null)}
                aria-label={`${tech.name} — proficiency ${tech.level}%`}
              >
                <span className={styles.iconWrap}>
                  <Icon name={tech.icon} size={30} />
                </span>
                <span className={styles.name}>{tech.name}</span>
                <span className={styles.levelWrap}>
                  <span className={styles.levelBg}>
                    <span
                      className={styles.levelFill}
                      style={{
                        width: hovered === i ? `${tech.level}%` : '0%',
                      }}
                    />
                  </span>
                  <span className={styles.levelNum}>
                    {hovered === i ? `${tech.level}%` : ''}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
