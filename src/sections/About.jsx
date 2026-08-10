import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { FiCheck, FiGrid, FiTrendingUp } from 'react-icons/fi';
import { ABOUT_STATS, SPECIALTIES } from '../data/content';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import styles from './About.module.css';

function Counter({ value, suffix }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView) return;
    let raf;
    const duration = 1600;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <SectionHeading
          eyebrow="About Us"
          title={
            <>
              A Creative Studio Crafting <span className="gradient">Digital Excellence</span>
            </>
          }
          sub="Tuyife Consult is a creative web development studio focused on turning bold ideas into polished, high-performing digital products. We blend design, engineering, and strategy to deliver experiences that look premium and perform flawlessly."
        />

        <div className={styles.grid}>
          <Reveal type="slideUp" className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelIcon}><FiGrid size={18} /></span>
              <span className={styles.panelTitle}>What we specialize in</span>
            </div>
            <ul className={styles.specialties}>
              {SPECIALTIES.map((s, i) => (
                <Reveal
                  key={s}
                  as="li"
                  type="slideUp"
                  delay={i * 0.05}
                  className={styles.specialty}
                >
                  <span className={styles.check}>
                    <FiCheck size={14} />
                  </span>
                  {s}
                </Reveal>
              ))}
            </ul>
          </Reveal>

          <Reveal type="slideUp" delay={0.15} className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelIcon}><FiTrendingUp size={18} /></span>
              <span className={styles.panelTitle}>Impact by the numbers</span>
            </div>
            <div className={styles.stats}>
              {ABOUT_STATS.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <span className={styles.statValue}>
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
            <p className={styles.quote}>
              “We don't just build websites — we build digital products that move businesses
              forward and leave lasting impressions.”
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
