import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineViewGrid,
  HiOutlineFolder,
  HiOutlineAdjustments,
  HiOutlineMail,
} from 'react-icons/hi';
import { NAV_LINKS } from '../data/content';
import styles from './Navbar.module.css';

const TAB_ICONS = {
  '#home': HiOutlineHome,
  '#about': HiOutlineUser,
  '#services': HiOutlineViewGrid,
  '#projects': HiOutlineFolder,
  '#process': HiOutlineAdjustments,
  '#contact': HiOutlineMail,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      let current = '#home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) current = `#${id}`;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <div className={styles.inner}>
          <a
            href="#home"
            className={styles.logo}
            onClick={(e) => goTo(e, '#home')}
            aria-label="Tuyife Consult home"
          >
            <img src="/logo.png" alt="Tuyife Consult logo" className={styles.logoImg} />
            <span className={styles.logoText}>Tuyife Consult</span>
          </a>

          <nav className={styles.desktopNav} aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${active === link.href ? styles.active : ''}`}
                onClick={(e) => goTo(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.navActions}>
            <a href="cv.html" target="_blank" rel="noreferrer" className={styles.cvLink}>
              Download CV
            </a>
            <button className={styles.cta} onClick={(e) => goTo(e, '#contact')}>
              Book a Consultation
            </button>
          </div>

          <a href="cv.html" target="_blank" rel="noreferrer" className={styles.mobileCv}>
            CV
          </a>
        </div>
      </motion.header>

      <motion.nav
        className={styles.bottomNav}
        aria-label="Mobile"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      >
        {NAV_LINKS.map((link) => {
          const Icon = TAB_ICONS[link.href];
          const isActive = active === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.bottomLink} ${isActive ? styles.active : ''}`}
              onClick={(e) => goTo(e, link.href)}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className={styles.bottomIcon}>
                <Icon size={20} />
              </span>
              <span className={styles.bottomLabel}>{link.label}</span>
            </a>
          );
        })}
      </motion.nav>
    </>
  );
}
