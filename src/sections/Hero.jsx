import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiArrowRight, FiCheck, FiZap } from 'react-icons/fi';
import { FaRocket } from 'react-icons/fa6';
import { TbAtom } from 'react-icons/tb';
import MagneticButton from '../components/MagneticButton';
import styles from './Hero.module.css';

const TYPING_LINES = [
  'Premium web experiences',
  'Scalable web applications',
  'Beautiful UI & UX',
  'Blazing-fast performance',
];

function useTypewriter(phrases) {
  const [text, setText] = useState('');
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[i % phrases.length];
    let timeout;
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && text === '') {
      timeout = setTimeout(() => {
        setDeleting(false);
        setI((v) => v + 1);
      }, 120);
    } else {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? 40 : 70,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, i, phrases]);

  return text;
}

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const typed = useTypewriter(TYPING_LINES);
  const sectionRef = useRef(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  const driftX = useTransform(sx, [-0.5, 0.5], [-22, 22]);
  const driftY = useTransform(sy, [-0.5, 0.5], [-16, 16]);
  const farX = useTransform(sx, [-0.5, 0.5], [-8, 8]);
  const farY = useTransform(sy, [-0.5, 0.5], [-6, 6]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      mx.set((e.clientX - rect.left) / rect.width - 0.5);
      my.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  const goTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} id="home" className={styles.hero}>
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.glowA} aria-hidden="true" />
      <div className={styles.glowB} aria-hidden="true" />
      <div className={styles.logoBg} aria-hidden="true">
        <img src="/logo.png" alt="" />
      </div>

      <motion.div
        className={styles.shape}
        aria-hidden="true"
        style={{ x: driftX, y: driftY }}
      >
        <span className={styles.square} />
        <span className={styles.circle} />
        <span className={styles.triangle} />
        <span className={styles.diamond} />
      </motion.div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className={styles.badge}
          >
            <span className={styles.pulseDot} />
            Premium Web Development & Digital Solutions
          </motion.div>

          <h1 className={styles.title}>
            <motion.span
              className={styles.line}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease }}
            >
              We Build Digital
            </motion.span>
            <motion.span
              className={styles.line}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.58, ease }}
            >
              Experiences That{' '}
              <span className={styles.gradientText}>Drive Growth.</span>
            </motion.span>
          </h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.72, ease }}
          >
            From business websites to scalable web applications, Tuyife Consult
            transforms ideas into beautiful, fast, and high-performing digital
            products.
          </motion.p>

          <motion.div
            className={styles.typedRow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
          >
            <span className={styles.prompt}>$</span>
            <span className={styles.typed}>{typed}</span>
            <span className={styles.caret} aria-hidden="true" />
          </motion.div>

          <motion.div
            className={styles.buttons}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease }}
          >
            <MagneticButton className="primary-btn" onClick={(e) => goTo(e, '#projects')}>
              View Portfolio <FiArrowRight />
            </MagneticButton>
            <MagneticButton className="ghost-btn" onClick={(e) => goTo(e, '#contact')}>
              Book a Consultation
            </MagneticButton>
          </motion.div>

          <motion.div
            className={styles.meta}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>50+</span>
              <span className={styles.metaSub}>Projects Delivered</span>
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>100%</span>
              <span className={styles.metaSub}>Client Satisfaction</span>
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>95+</span>
              <span className={styles.metaSub}>Lighthouse Score</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.stage}
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease }}
          style={{ perspective: 1200 }}
        >
          <motion.div className={styles.scene} style={{ x: farX, y: farY }}>
            <motion.div
              className={styles.laptop}
              style={{ x: driftX, y: driftY, rotateX: useTransform(sy, [-0.5, 0.5], [7, -7]), rotateY: useTransform(sx, [-0.5, 0.5], [-10, 10]) }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className={styles.laptopScreen}>
                <div className={styles.windowBar}>
                  <span className={styles.windowDotRed} />
                  <span className={styles.windowDotYellow} />
                  <span className={styles.windowDotGreen} />
                  <span className={styles.windowTitle}>tuyife-consult.ts</span>
                </div>
                <pre className={styles.code}>
                  <code>
                    <span className={styles.lineNo}>1</span>
                    <span className={styles.key}>import</span> <span className={styles.str}>'tuyife'</span> <span className={styles.key}>from</span> <span className={styles.str}>'@digital/studio'</span>
                    {'\n'}
                    <span className={styles.lineNo}>2</span>
                    <span className={styles.key}>const</span> <span className={styles.fn}>build</span> = <span className={styles.paren}>(</span><span className={styles.prop}>vision</span>, <span className={styles.prop}>strategy</span><span className={styles.paren}>)</span> <span className={styles.arrow}>=&gt;</span>
                    {'\n'}
                    <span className={styles.lineNo}>3</span>
                    {'  '}<span className={styles.key}>return</span> <span className={styles.fn}>craft</span><span className={styles.paren}>(</span><span className={styles.paren}>{'{'}</span>
                    {'\n'}
                    <span className={styles.lineNo}>4</span>
                    {'    '}<span className={styles.prop}>design</span>: <span className={styles.str}>'premium'</span>,
                    {'\n'}
                    <span className={styles.lineNo}>5</span>
                    {'    '}<span className={styles.prop}>speed</span>: <span className={styles.num}>100</span>,
                    {'\n'}
                    <span className={styles.lineNo}>6</span>
                    {'    '}<span className={styles.prop}>growth</span>: <span className={styles.str}>'exponential'</span>,
                    {'\n'}
                    <span className={styles.lineNo}>7</span>
                    {'  '}<span className={styles.paren}>{'}'}</span><span className={styles.paren}>{')'}</span>;
                    {'\n'}
                    <span className={styles.lineNo}>8</span>
                    {'\n'}
                    <span className={styles.lineNo}>9</span>
                    <span className={styles.fn}>build</span><span className={styles.paren}>(</span><span className={styles.str}>'your idea'</span>, <span className={styles.str}>'2026'</span><span className={styles.paren}>)</span><span className={styles.cursor} />
                  </code>
                </pre>
              </div>
              <div className={styles.laptopBase}>
                <div className={styles.baseCut} />
              </div>
            </motion.div>

            <motion.div
              className={`${styles.floatWindow} ${styles.winA}`}
              style={{ x: driftX }}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className={styles.floatWindowBar}>
                <span className={styles.fwDot} />
                <span className={styles.fwDotAlt} />
                <span className={styles.fwTitle}>growth-metrics</span>
              </div>
              <div className={styles.chart}>
                <div className={styles.chartRow}>
                  <span className={styles.chartLabel}>Traffic</span>
                  <span className={styles.barWrap}>
                    <motion.span
                      className={styles.bar}
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.4, delay: 1.4, ease }}
                    />
                  </span>
                  <span className={styles.chartPct}>+132%</span>
                </div>
                <div className={styles.chartRow}>
                  <span className={styles.chartLabel}>Revenue</span>
                  <span className={styles.barWrap}>
                    <motion.span
                      className={`${styles.bar} ${styles.barBlue}`}
                      initial={{ width: 0 }}
                      animate={{ width: '72%' }}
                      transition={{ duration: 1.4, delay: 1.6, ease }}
                    />
                  </span>
                  <span className={styles.chartPct}>+87%</span>
                </div>
                <div className={styles.chartRow}>
                  <span className={styles.chartLabel}>Engage</span>
                  <span className={styles.barWrap}>
                    <motion.span
                      className={`${styles.bar} ${styles.barCyan}`}
                      initial={{ width: 0 }}
                      animate={{ width: '46%' }}
                      transition={{ duration: 1.4, delay: 1.8, ease }}
                    />
                  </span>
                  <span className={styles.chartPct}>+64%</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={`${styles.floatWindow} ${styles.winB}`}
              style={{ x: driftX }}
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className={styles.floatWindowBar}>
                <span className={styles.fwDot} />
                <span className={styles.fwDotAlt} />
                <span className={styles.fwTitle}>deploy.sh</span>
              </div>
              <div className={styles.terminal}>
                <p><span className={styles.ok}><FiCheck size={12} /></span> build completed in 4.2s</p>
                <p><span className={styles.ok}><FiCheck size={12} /></span> bundle size 42kb gzip</p>
                <p><span className={styles.ok}><FiCheck size={12} /></span> lighthouse 98 / 100</p>
                <p className={styles.deploying}><span className={styles.spinner}>◌</span> deploying to production…</p>
              </div>
            </motion.div>

            <motion.div
              className={`${styles.codeChip} ${styles.chipA}`}
              animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className={styles.chipKey}><TbAtom size={15} /></span> React + Vite · 60fps
            </motion.div>

            <motion.div
              className={`${styles.codeChip} ${styles.chipB}`}
              animate={{ y: [0, 12, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className={styles.chipKey}><FaRocket size={14} /></span> Deployed &amp; Live
            </motion.div>

            <motion.div
              className={`${styles.codeChip} ${styles.chipC}`}
              animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className={styles.chipKey}><FiZap size={15} /></span> Lighthouse 98
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollHint}
        animate={{ opacity: [0.4, 1, 0.4], y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <span>Scroll to explore</span>
        <span className={styles.scrollLine} />
      </motion.div>
    </section>
  );
}
