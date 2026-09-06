const SCHEDULE = [
  {
    time: '9:00 AM',
    title: 'Opening Keynote: AI and the Future of Business in Latin America',
    speaker: 'Andrés Torres · VP of Digital Transformation, EPAM Systems',
    description: 'A panoramic view of how artificial intelligence is disrupting industries across the region — and what business leaders must do today to stay ahead of the curve.',
    track: 'Main Stage',
  },
  {
    time: '10:30 AM',
    title: 'From Pilot to Production: Scaling AI Across the Enterprise',
    speaker: 'Carolina Mejía · Chief AI Officer, Bancolombia',
    description: 'Most companies launch AI pilots successfully but struggle to scale. This session shares a proven framework for moving from experimentation to enterprise-wide deployment.',
    track: 'Strategy Track',
  },
  {
    time: '12:00 PM',
    title: 'Networking Lunch',
    speaker: null,
    description: 'Enjoy lunch and connect with fellow attendees, speakers, and EPAM team members in an informal setting.',
    track: 'Break',
  },
  {
    time: '1:30 PM',
    title: 'Workshop: Build Your AI Roadmap in 90 Minutes',
    speaker: 'Valentina Ruiz · Head of Data & AI, Rappi',
    description: 'An interactive working session where you will map your business goals to specific AI use cases and walk away with a prioritized roadmap ready to present to your team.',
    track: 'Workshop',
  },
  {
    time: '3:00 PM',
    title: 'Case Study Showcase & Closing Panel',
    speaker: 'All Featured Speakers',
    description: "Three companies share their real AI transformation stories — the wins, the failures, and the lessons learned — followed by an open Q&A with the day's speakers.",
    track: 'Main Stage',
  },
];

const TRACK_COLORS = {
  'Main Stage': '#00f5d4',
  'Strategy Track': '#7b2ff7',
  'Workshop': '#3b82f6',
  'Break': '#6b7280',
};

export default function Program() {
  return (
    <section id="program">
      <div className="container">
        <p className="section-label">November 20, 2026</p>
        <h2 className="section-title">Program Schedule</h2>
        <p className="section-subtitle" style={{ marginBottom: '48px' }}>
          A full day of keynotes, strategy sessions, and hands-on workshops.
        </p>
        <div className="timeline">
          {SCHEDULE.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-time">{item.time}</div>
              <div className="timeline-connector">
                <div
                  className="timeline-dot"
                  style={{ background: TRACK_COLORS[item.track] || 'var(--accent)' }}
                />
                {i < SCHEDULE.length - 1 && <div className="timeline-line" />}
              </div>
              <div className="timeline-card">
                <span
                  className="timeline-track"
                  style={{ color: TRACK_COLORS[item.track] || 'var(--accent)' }}
                >
                  {item.track}
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
