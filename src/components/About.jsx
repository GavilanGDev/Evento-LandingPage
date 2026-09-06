export default function About() {
  return (
    <section id="about">
      <div className="container about-layout">
        <div className="about-text">
          <p className="section-label">About the Event</p>
          <h2 className="section-title">AI that works<br />for your business</h2>
          <p className="about-body">
            AI Business Summit 2026 is a one-day event that brings together executives,
            business leaders, and technology professionals to explore how artificial
            intelligence is reshaping industries across Latin America.
          </p>
          <p className="about-body">
            Hosted at EPAM's Bogotá office on November 20, the summit focuses on
            practical AI adoption — from building your first AI strategy to scaling
            intelligent systems across the enterprise. Every session is designed to
            deliver actionable insights you can take back to your organization the
            very next day.
          </p>
          <p className="about-body">
            Whether you are a business executive evaluating AI investments, a
            technology leader driving transformation, or a practitioner building
            AI-powered products, this is the event to connect, learn, and accelerate
            your journey.
          </p>
        </div>
        <div className="about-highlights">
          {[
            { icon: '🤖', title: 'Practical AI focus', desc: 'Real use cases and lessons from companies already running AI in production' },
            { icon: '🌎', title: 'Latin America context', desc: 'Content tailored to the challenges and opportunities of our region' },
            { icon: '🤝', title: 'Executive networking', desc: 'Connect with peers and decision-makers shaping AI strategy today' },
            { icon: '🗺️', title: 'Your AI roadmap', desc: 'Leave with a concrete plan and the tools to start executing immediately' },
          ].map((item) => (
            <div key={item.title} className="about-card">
              <span className="about-card-icon">{item.icon}</span>
              <div>
                <h3 className="about-card-title">{item.title}</h3>
                <p className="about-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
