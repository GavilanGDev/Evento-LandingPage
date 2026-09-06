export default function About() {
  return (
    <section id="about">
      <div className="container about-layout">
        <div className="about-text">
          <p className="section-label">About the Event</p>
          <h2 className="section-title">Where builders shape<br />what's next</h2>
          <p className="about-body">
            NeonStack Summit is the premier annual gathering for engineers, architects,
            and technology leaders who are pushing the boundaries of modern software.
            Now in its fifth year, the summit brings together the brightest minds from
            startups, scaleups, and the world's largest tech companies for two intense
            days of learning and collaboration.
          </p>
          <p className="about-body">
            Whether you work in AI, distributed systems, developer tooling, or platform
            engineering, you'll find deep technical content designed to level up your
            practice — not just inspire you from a stage. Every session is selected
            through a rigorous review process to ensure real-world relevance.
          </p>
          <p className="about-body">
            Beyond the talks, NeonStack is about the conversations that happen in
            hallways, lunch tables, and late-night workshops. Come ready to connect,
            challenge ideas, and leave with the knowledge and relationships that move
            your career forward.
          </p>
        </div>
        <div className="about-highlights">
          {[
            { icon: '⚡', title: 'Deep technical talks', desc: 'No fluff — only real, production-grade insights from practitioners' },
            { icon: '🛠', title: 'Hands-on workshops', desc: 'Interactive sessions where you actually build things' },
            { icon: '🌐', title: 'Global community', desc: 'Attendees from 60+ countries across every major tech hub' },
            { icon: '🎯', title: 'Career-defining connections', desc: 'Meet the people building the tools you use every day' },
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
