export default function Hero() {
  function scrollToRegistration() {
    document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="hero">
      <div className="hero-bg-glow" />
      <div className="container hero-content">
        <span className="hero-tag">October 17–18, 2026 · San Francisco, CA</span>
        <h1 className="hero-title">
          Neon<span className="hero-title-accent">Stack</span>
          <br />Summit 2026
        </h1>
        <p className="hero-description">
          Two days of cutting-edge talks, live demos, and hands-on workshops at
          the intersection of AI, cloud infrastructure, and the future of software.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={scrollToRegistration}>
            Register Now →
          </button>
          <a href="#program" className="btn-ghost">View Schedule</a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">2,000+</span>
            <span className="hero-stat-label">Attendees</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-number">40+</span>
            <span className="hero-stat-label">Speakers</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-number">3</span>
            <span className="hero-stat-label">Stages</span>
          </div>
        </div>
      </div>
    </section>
  );
}
