import { useState, useEffect, Fragment } from 'react';

const EVENT_DATE = new Date('2026-11-20T09:00:00-05:00');

function getTimeLeft() {
  const diff = EVENT_DATE - Date.now();
  if (diff <= 0) return null;
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  function scrollToRegistration() {
    document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
  }

  const units = timeLeft
    ? [
        { label: 'Days',    value: timeLeft.days },
        { label: 'Hours',   value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
      ]
    : null;

  return (
    <section className="hero">
      <div className="hero-bg-glow" />
      <div className="container hero-content">
        <span className="hero-tag">November 20, 2026 · EPAM Office, Bogotá</span>
        <h1 className="hero-title">
          AI Business<br />
          <span className="hero-title-accent">Summit 2026</span>
        </h1>
        <p className="hero-description">
          A one-day gathering of business leaders and technology professionals
          exploring the practical impact of artificial intelligence on enterprises
          across Latin America.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={scrollToRegistration}>
            Register Now →
          </button>
          <a href="#program" className="btn-ghost">View Schedule</a>
        </div>

        <div className="hero-countdown">
          {units ? (
            <>
              <p className="countdown-heading">Event starts in</p>
              <div className="countdown-units">
                {units.map(({ label, value }, i) => (
                  <Fragment key={label}>
                    <div className="countdown-block">
                      <span className="countdown-number">
                        {String(value).padStart(2, '0')}
                      </span>
                      <span className="countdown-label">{label}</span>
                    </div>
                    {i < units.length - 1 && (
                      <span className="countdown-colon">:</span>
                    )}
                  </Fragment>
                ))}
              </div>
            </>
          ) : (
            <p className="countdown-started">Event has started!</p>
          )}
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">200+</span>
            <span className="hero-stat-label">Attendees</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-number">10+</span>
            <span className="hero-stat-label">Speakers</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-number">1</span>
            <span className="hero-stat-label">Day</span>
          </div>
        </div>
      </div>
    </section>
  );
}
