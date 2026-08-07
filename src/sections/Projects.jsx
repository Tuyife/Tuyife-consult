import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa6';
import { PROJECTS } from '../data/content';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import styles from './Projects.module.css';

function ProjectCard({ project, i }) {
  return (
    <Reveal type="slideUp" delay={(i % 3) * 0.12} className={styles.cardWrap}>
      <article className={styles.card}>
        <div className={styles.cover} style={{ background: project.gradient }}>
          <div className={styles.coverGlow} />
          {project.image && (
            <img
              src={project.image}
              alt={`${project.name} — live preview`}
              className={styles.coverImg}
              loading="lazy"
            />
          )}
          <div className={styles.coverBrowser}>
            <span className={styles.cbDot} />
            <span className={styles.cbDotAlt} />
            <span className={styles.cbUrl}>{project.name.toLowerCase().replace(/ /g, '-')}.app</span>
          </div>
          <div className={styles.coverBody}>
            <span className={styles.coverMetric}>{project.metric}</span>
          </div>
          <div className={styles.overlay}>
            <div className={styles.overlayActions}>
              <a href={project.live} target="_blank" rel="noreferrer" className={styles.overlayBtn} aria-label={`Live demo of ${project.name}`}>
                <FiExternalLink size={17} />
              </a>
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className={styles.overlayBtn} aria-label={`GitHub repo of ${project.name}`}>
                  <FaGithub size={17} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className={styles.body}>
          <span className={styles.category}>{project.category}</span>
          <h3 className={styles.name}>{project.name}</h3>
          <p className={styles.desc}>{project.desc}</p>
          <div className={styles.stack}>
            {project.stack.map((t) => (
              <span key={t} className={styles.tech}>
                {t}
              </span>
            ))}
          </div>
          <div className={styles.actions}>
            <a href={project.live} target="_blank" rel="noreferrer" className={styles.demo}>
              Live Demo <FiExternalLink size={15} />
            </a>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className={styles.codeBtn}>
                <FaGithub size={16} /> GitHub
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function EmptyState() {
  return (
    <Reveal type="slideUp" className={styles.emptyWrap}>
      <div className={styles.empty}>
        <span className={styles.emptyIcon}>🛠️</span>
        <h3 className={styles.emptyTitle}>Projects coming soon</h3>
        <p className={styles.emptyDesc}>
          We're currently building exciting new products. Check back shortly to see our latest
          work — or reach out and we'll show you what we're working on.
        </p>
        <a href="#contact" className={styles.emptyBtn}>
          Book a Consultation
        </a>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <SectionHeading
          eyebrow="Featured Work"
          title={
            <>
              Projects That <span className="gradient">Speak for Themselves</span>
            </>
          }
          sub="A selection of products we've designed and engineered — each one crafted for performance, beauty, and measurable business impact."
        />

        {PROJECTS.length > 0 ? (
          <div className={styles.grid}>
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.name} project={project} i={i} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </section>
  );
}
