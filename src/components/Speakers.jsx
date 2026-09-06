const SPEAKERS = [
  {
    name: 'Dr. Mia Chen',
    title: 'Chief Technology Officer',
    company: 'Verceleon',
    initials: 'MC',
    color: '#00f5d4',
    bio: "Mia leads engineering for one of the fastest-growing cloud platforms in North America. A former researcher at MIT's CSAIL, she has published widely on distributed machine learning and speaks globally on the future of AI infrastructure.",
  },
  {
    name: 'Tariq Osei',
    title: 'Principal Engineer',
    company: 'Stripe',
    initials: 'TO',
    color: '#7b2ff7',
    bio: 'Tariq has spent a decade designing the payment systems that process trillions of dollars annually. He is a founding contributor to several open-source reliability tools and maintains a popular technical blog on distributed consensus.',
  },
  {
    name: 'Sofia Reyes',
    title: 'VP of Engineering',
    company: 'CloudNative Co.',
    initials: 'SR',
    color: '#3b82f6',
    bio: 'Sofia built and scaled platform teams at three unicorn companies before joining CloudNative Co. She is a passionate advocate for developer experience and co-authored the widely cited "Platform Maturity Model" white paper.',
  },
  {
    name: 'James Wu',
    title: 'AI Infrastructure Lead',
    company: 'Anthropic',
    initials: 'JW',
    color: '#f59e0b',
    bio: 'James works at the frontier of large language model deployment, focusing on making AI systems safe, efficient, and production-ready. He regularly speaks on the operational challenges of running AI at enterprise scale.',
  },
];

export default function Speakers() {
  return (
    <section id="speakers">
      <div className="container">
        <p className="section-label">Featured Speakers</p>
        <h2 className="section-title">Learn from the best</h2>
        <p className="section-subtitle" style={{ marginBottom: '48px' }}>
          Our speakers are practitioners, not pundits — they share real lessons from real systems.
        </p>
        <div className="speakers-grid">
          {SPEAKERS.map((s) => (
            <div key={s.name} className="speaker-card">
              <div className="speaker-avatar" style={{ background: s.color + '22', borderColor: s.color + '55' }}>
                <span style={{ color: s.color }}>{s.initials}</span>
              </div>
              <h3 className="speaker-name">{s.name}</h3>
              <p className="speaker-title">{s.title}</p>
              <p className="speaker-company">{s.company}</p>
              <p className="speaker-bio">{s.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
