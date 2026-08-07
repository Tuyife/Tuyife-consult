import { HiOutlineStar } from 'react-icons/hi';
import { TESTIMONIALS } from '../data/content';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import styles from './Testimonials.module.css';

function Stars({ count }) {
  return (
    <div className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <HiOutlineStar
          key={i}
          size={17}
          style={{ color: i < count ? '#0a84ff' : 'rgba(255,255,255,0.18)' }}
          fill={i < count ? '#0a84ff' : 'none'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className={`section ${styles.testimonials}`}>
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Trusted by <span className="gradient">Founders & Teams</span>
            </>
          }
          sub="Real feedback from the clients we've had the privilege of building with. Their success is our best advertisement."
          align="center"
        />

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} type="slideUp" delay={i * 0.12} className={styles.cardWrap}>
              <figure className={styles.card}>
                <span className={styles.quoteMark} aria-hidden="true">
                  “
                </span>
                <Stars count={t.rating} />
                <blockquote className={styles.quote}>{t.quote}</blockquote>
                <figcaption className={styles.author}>
                  <span className={styles.avatar} style={{ background: t.gradient }}>
                    {t.initials}
                  </span>
                  <span className={styles.authorMeta}>
                    <span className={styles.authorName}>{t.name}</span>
                    <span className={styles.authorRole}>{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
