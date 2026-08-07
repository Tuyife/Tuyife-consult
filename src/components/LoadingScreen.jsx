import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen({ onFinish }) {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.body.classList.add('no-scroll');
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / 1800) * 100));
      setCount(pct);
      if (pct < 100) requestAnimationFrame(tick);
    };
    const raf = requestAnimationFrame(tick);
    const timer = setTimeout(() => {
      setDone(true);
      document.body.classList.remove('no-scroll');
      setTimeout(onFinish, 700);
    }, 2000);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      document.body.classList.remove('no-scroll');
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className={styles.wrap}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(6px)' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className={styles.inner}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={styles.logo}
            >
              <img src="/logo.png" alt="Tuyife Consult logo" className={styles.logoImg} />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={styles.name}
            >
              TUYIFE CONSULT
            </motion.p>
            <div className={styles.bar}>
              <motion.div
                className={styles.barFill}
                initial={{ width: '0%' }}
                animate={{ width: `${count}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
            <motion.span
              className={styles.pct}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {count}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
