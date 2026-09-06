const SCHEDULE = [
  {
    time: '9:00 AM',
    title: 'Opening Keynote: The AI-Native Stack',
    speaker: 'Dr. Mia Chen · CTO, Verceleon',
    description: 'A provocative look at how AI is restructuring the entire software development lifecycle — from ideation to deployment to observability.',
    track: 'Main Stage',
  },
  {
    time: '10:30 AM',
    title: 'Building Distributed Systems That Actually Hold Up',
    speaker: 'Tariq Osei · Principal Engineer, Stripe',
    description: 'Lessons from operating at scale: consensus, failure modes, and the patterns that survive contact with production traffic.',
    track: 'Engineering Track',
  },
  {
    time: '12:00 PM',
    title: 'Lunch + Open Networking',
    speaker: null,
    description: 'Grab a meal and connect with fellow attendees. Structured roundtables available in Hall B.',
    track: 'Break',
  },
  {
    time: '1:30 PM',
    title: 'Platform Engineering at 100x Scale',
    speaker: 'Sofia Reyes · VP Engineering, CloudNative Co.',
    description: 'How to build internal developer platforms that teams actually adopt — and how to measure their impact on velocity and reliability.',
    track: 'Platform Track',
  },
  {
    time: '3:00 PM',
    title: 'LLMs in Production: What Nobody Told You',
    speaker: 'James Wu · AI Infrastructure Lead, Anthropic',
    description: 'Real-world deployment challenges: latency, cost, evals, prompt injection, and the operational maturity model for AI systems.',
    track: 'AI Track',
  },
  {
    time: '5:00 PM',
    title: 'Closing Panel + Happy Hour',
    speaker: 'All Featured Speakers',
    description: "An open Q&A with the day's speakers, followed by a sponsored happy hour on the rooftop terrace.",
    track: 'Main Stage',
  },
];

const TRACK_COLORS = {
  'Main Stage': '#00f5d4',
  'Engineering Track': '#7b2ff7',
  'Platform Track': '#3b82f6',
  'AI Track': '#f59e0b',
  'Break': '#6b7280',
};

export default function Program() {
  return (
    <section id="program">
      <div className="container">
        <p className="section-label">Day 1 · October 17</p>
        <h2 className="section-title">Program Schedule</h2>
        <p className="section-subtitle" style={{ marginBottom: '48px' }}>
          A full day of back-to-back sessions across four parallel tracks.
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
