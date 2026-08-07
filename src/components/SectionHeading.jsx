import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, sub, align = 'left' }) {
  return (
    <div
      style={{
        marginBottom: 56,
        textAlign: align,
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
      }}
    >
      <Reveal type="slideUp">
        <span className="section-eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal type="slideUp" delay={0.1}>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal type="slideUp" delay={0.2}>
          <p className="section-sub">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
