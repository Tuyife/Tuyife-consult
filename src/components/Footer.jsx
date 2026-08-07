import { SOCIALS, NAV_LINKS } from '../data/content';
import Icon from './Icon';
import styles from './Footer.module.css';

export default function Footer() {
  const goTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#home" className={styles.logo} onClick={(e) => goTo(e, '#home')}>
              <img src="/logo.png" alt="Tuyife Consult logo" className={styles.logoImg} />
            </a>
            <p className={styles.tagline}>
              Premium web development & digital solutions. We build digital experiences that
              drive growth.
            </p>
            <div className={styles.socials}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className={styles.social}
                >
                  <Icon name={s.icon} size={17} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul className={styles.links}>
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={(e) => goTo(e, l.href)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.links}>
              <li>Website Design</li>
              <li>Web Development</li>
              <li>React Applications</li>
              <li>UI/UX Design</li>
              <li>E-commerce</li>
              <li>Dashboard Systems</li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.links}>
              <li>
                <a href="mailto:omotuyifeisrael@gmail.com">omotuyifeisrael@gmail.com</a>
              </li>
              <li>
                <a href="tel:+2348065878877">+234 806 587 8877</a>
              </li>
              <li>
                <a href="https://wa.me/2348065878877" target="_blank" rel="noreferrer">
                  WhatsApp Me
                </a>
              </li>
              <li>Remote · Worldwide</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Tuyife Consult. All rights reserved.
          </p>
          <p className={styles.credit}>
            Designed &amp; Developed by <span className={styles.highlight}>Tuyife Consult</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
