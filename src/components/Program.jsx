import { useLanguage } from '../LanguageContext';

const TRACK_COLORS = {
  'Main Stage':     '#00f5d4',
  'Strategy Track': '#7b2ff7',
  'Workshop':       '#3b82f6',
  'Break':          '#6b7280',
};

export default function Program() {
  const { t } = useLanguage();
  const p = t.program;

  return (
    <section id="program">
      <div className="container">
        <p className="section-label animate-item" style={{ '--delay': '0s' }}>{p.label}</p>
        <h2 className="section-title animate-item" style={{ '--delay': '0.1s' }}>{p.title}</h2>
        <p className="section-subtitle animate-item" style={{ '--delay': '0.2s', marginBottom: '48px' }}>
          {p.subtitle}
        </p>
        <div className="timeline">
          {p.sessions.map((item, i) => (
            <div
              key={i}
              className="timeline-item animate-item"
              style={{ '--delay': `${0.3 + i * 0.1}s` }}
            >
              <div className="timeline-time">{item.time}</div>
              <div className="timeline-connector">
                <div
                  className="timeline-dot"
                  style={{ background: TRACK_COLORS[item.track] || 'var(--accent)' }}
                />
                {i < p.sessions.length - 1 && <div className="timeline-line" />}
              </div>
              <div className="timeline-card">
                <span
                  className="timeline-track"
                  style={{ color: TRACK_COLORS[item.track] || 'var(--accent)' }}
                >
                  {p.tracks[item.track] || item.track}
                </span>
                <h3 className="timeline-title">{item.title}</h3>
                {item.speaker && (
                  <p className="timeline-speaker">{item.speaker}</p>
                )}
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
