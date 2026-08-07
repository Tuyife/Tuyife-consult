import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { PROCESS_STEPS } from '../data/content';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import styles from './Process.module.css';

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.75', 'end 0.35'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="process" className={`section ${styles.process}`}>
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <SectionHeading
          eyebrow="How We Work"
          title={
            <>
              A Proven Process, <span className="gradient">Zero Guesswork</span>
            </>
          }
          sub="From the first conversation to long-term support, every project follows a clear, transparent workflow that keeps you informed at every stage."
        />

        <div ref={ref} className={styles.timeline}>
          <motion.div className={styles.line} style={{ scaleY }} aria-hidden="true" />
          <div className={styles.steps}>
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.title} type="slideUp" delay={i * 0.08} className={styles.stepWrap}>
                <div className={styles.step}>
                  <div className={styles.node}>
                    <span className={styles.nodeInner}>
                      <Icon name={step.icon} size={20} />
                    </span>
                    <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
