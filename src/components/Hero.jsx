import { useState, useEffect, Fragment } from 'react';
import { useLanguage } from '../LanguageContext';

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
  const { t } = useLanguage();
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
        { label: t.hero.days,    value: timeLeft.days },
        { label: t.hero.hours,   value: timeLeft.hours },
        { label: t.hero.minutes, value: timeLeft.minutes },
        { label: t.hero.seconds, value: timeLeft.seconds },
      ]
    : null;

  return (
    <section className="hero">
      <div className="hero-bg-glow" />
      <div className="container hero-content">
        <span className="hero-tag animate-item" style={{ '--delay': '0s' }}>
          {t.hero.tag}
        </span>
        <h1 className="hero-title animate-item" style={{ '--delay': '0.1s' }}>
          AI Business<br />
          <span className="hero-title-accent">Summit 2026</span>
        </h1>
        <p className="hero-description animate-item" style={{ '--delay': '0.2s' }}>
          {t.hero.description}
        </p>
        <div className="hero-actions animate-item" style={{ '--delay': '0.3s' }}>
          <button className="btn-primary" onClick={scrollToRegistration}>
            {t.hero.btnRegister}
          </button>
          <a href="#program" className="btn-ghost">{t.hero.btnSchedule}</a>
        </div>

        <div className="hero-countdown animate-item" style={{ '--delay': '0.4s' }}>
          {units ? (
            <>
              <p className="countdown-heading">{t.hero.countdownHeading}</p>
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
            <p className="countdown-started">{t.hero.countdownStarted}</p>
          )}
        </div>

        <div className="hero-stats animate-item" style={{ '--delay': '0.5s' }}>
          <div className="hero-stat">
            <span className="hero-stat-number">200+</span>
            <span className="hero-stat-label">{t.hero.statAttendees}</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-number">10+</span>
            <span className="hero-stat-label">{t.hero.statSpeakers}</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-number">1</span>
            <span className="hero-stat-label">{t.hero.statDay}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
