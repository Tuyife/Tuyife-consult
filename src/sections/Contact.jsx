import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiDownload, FiArrowRight, FiMapPin } from 'react-icons/fi';
import { CONTACT_SERVICES, SOCIALS } from '../data/content';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import styles from './Contact.module.css';

const BUDGETS = ['$500 – $1,000', '$1,000 – $2,500', '$2,500 – $5,000', '$5,000 – $10,000', '$10,000+'];

const inputVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    e.target.reset();
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className={styles.glowA} aria-hidden="true" />
      <div className={styles.glowB} aria-hidden="true" />
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's Build Something <span className="gradient">Great Together</span>
            </>
          }
          sub="Tell us about your project — we'll get back to you within 24 hours with ideas, a plan, and a clear quote. No obligations, just possibilities."
        />

        <div className={styles.grid}>
          <Reveal type="slideUp" className={styles.info}>
            <h3 className={styles.infoTitle}>Start a conversation</h3>
            <p className={styles.infoDesc}>
              Prefer to reach out directly? We're always happy to chat about your idea, whether
              it's a new launch or a redesign.
            </p>

            <div className={styles.socialList}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialRow}
                >
                  <span className={styles.socialIcon}>
                    <Icon name={s.icon} size={19} />
                  </span>
                  <span className={styles.socialLabel}>{s.label}</span>
                  <span className={styles.socialArrow}><FiArrowRight size={17} /></span>
                </a>
              ))}
            </div>

            <div className={styles.infoCard}>
              <span className={styles.infoCardLabel}>Response time</span>
              <span className={styles.infoCardValue}>Under 24 hours</span>
              <span className={styles.infoCardMeta}>Average across all projects</span>
            </div>

            <a href="cv.html" target="_blank" rel="noreferrer" className={styles.downloadCv}>
              <span className={styles.downloadIcon}>
                <FiDownload size={19} />
              </span>
              <span className={styles.downloadText}>
                <span className={styles.downloadLabel}>Download Résumé</span>
                <span className={styles.downloadMeta}>View my CV · Save as PDF</span>
              </span>
              <span className={styles.downloadArrow}><FiArrowRight size={17} /></span>
            </a>

            <div className={styles.mapWrap}>
              <div className={styles.mapHeader}>
                <span className={styles.mapPin}><FiMapPin size={17} /></span>
                <span>Based Worldwide · Working Remotely</span>
              </div>
              <iframe
                title="Tuyife Consult location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126940.19472302896!2d3.3218736500000004!3d6.5243793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228fa2fb399%3A0xbe7c7ff5b1f4f1b7!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                width="100%"
                height="240"
                style={{ border: 0, borderRadius: '0 0 14px 14px' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal type="slideUp" delay={0.12} className={styles.formWrap}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <motion.div className={styles.field} custom={0} variants={inputVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                  <label className={styles.label} htmlFor="name">
                    Name <span className={styles.req}>*</span>
                  </label>
                  <input id="name" name="name" className={styles.input} type="text" placeholder="Your full name" required autoComplete="name" />
                </motion.div>
                <motion.div className={styles.field} custom={1} variants={inputVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                  <label className={styles.label} htmlFor="email">
                    Email <span className={styles.req}>*</span>
                  </label>
                  <input id="email" name="email" className={styles.input} type="email" placeholder="you@email.com" required autoComplete="email" />
                </motion.div>
              </div>

              <motion.div className={styles.field} custom={2} variants={inputVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                <label className={styles.label} htmlFor="phone">
                  Phone
                </label>
                <input id="phone" name="phone" className={styles.input} type="tel" placeholder="+234 800 000 0000" autoComplete="tel" />
              </motion.div>

              <motion.div className={styles.row} custom={3} variants={inputVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                <motion.div className={styles.field}>
                  <label className={styles.label} htmlFor="budget">
                    Project Budget
                  </label>
                  <select id="budget" name="budget" className={styles.input}>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </motion.div>
                <motion.div className={styles.field}>
                  <label className={styles.label} htmlFor="service">
                    Service Needed <span className={styles.req}>*</span>
                  </label>
                  <select id="service" name="service" className={styles.input} required defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    {CONTACT_SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </motion.div>

              <motion.div className={styles.field} custom={4} variants={inputVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                <label className={styles.label} htmlFor="message">
                  Message <span className={styles.req}>*</span>
                </label>
                <textarea id="message" name="message" className={`${styles.input} ${styles.textarea}`} rows={5} placeholder="Tell us about your project, timeline, and goals…" required />
              </motion.div>

              <motion.button
                className={styles.submit}
                type="submit"
                custom={5}
                variants={inputVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiSend size={17} /> {sent ? 'Message Sent — Thank You!' : 'Send Message'}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
