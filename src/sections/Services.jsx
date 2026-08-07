import { SERVICES } from '../data/content';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Premium Services Built for <span className="gradient">Your Success</span>
            </>
          }
          sub="From concept to launch and beyond — every service is crafted with the same obsessive attention to quality, performance, and design."
          align="center"
        />

        <div className={styles.grid}>
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} type="slideUp" delay={(i % 3) * 0.1} className={styles.cardWrap}>
              <article className={styles.card}>
                <div className={styles.iconWrap}>
                  <Icon name={service.icon} size={22} />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
                <span className={styles.cardNum}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
