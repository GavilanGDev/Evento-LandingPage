import { useState, useEffect } from 'react';

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.261 5.635 5.903-5.635zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SPEAKERS = [
  {
    name: 'Andrés Torres',
    title: 'VP of Digital Transformation',
    company: 'EPAM Systems',
    initials: 'AT',
    color: '#00f5d4',
    talk: 'AI and the Future of Business in Latin America',
    bio: "Andrés leads EPAM's digital transformation practice across Latin America, helping organizations adopt AI and cloud technologies at enterprise scale. With over 15 years in technology consulting, he has guided more than 50 companies through complex digital transitions and is recognized as one of the region's most influential voices in enterprise AI adoption.",
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
  },
  {
    name: 'Carolina Mejía',
    title: 'Chief AI Officer',
    company: 'Bancolombia',
    initials: 'CM',
    color: '#7b2ff7',
    talk: 'From Pilot to Production: Scaling AI Across the Enterprise',
    bio: "Carolina oversees AI strategy and implementation at one of Colombia's largest banks, where her team has deployed machine learning models that serve millions of customers daily. She is a frequent speaker on responsible AI and financial inclusion, and sits on the advisory board of two AI ethics organizations in Latin America.",
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
  },
  {
    name: 'Valentina Ruiz',
    title: 'Head of Data & AI',
    company: 'Rappi',
    initials: 'VR',
    color: '#3b82f6',
    talk: 'Workshop: Build Your AI Roadmap in 90 Minutes',
    bio: "Valentina built Rappi's data and AI platform from the ground up, scaling it to process tens of millions of transactions per day across 9 countries. She is passionate about making data-driven decision-making accessible to every team in the organization, and has spoken at DataSummit, AI Latam, and AWS re:Invent.",
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
  },
  {
    name: 'Sebastián Gómez',
    title: 'Founder & CEO',
    company: 'Latam AI Ventures',
    initials: 'SG',
    color: '#f59e0b',
    talk: 'Investing in AI: What Founders and Executives Need to Know',
    bio: "Sebastián founded Latam AI Ventures to invest in and accelerate AI startups across the region. A former engineer turned entrepreneur, he has backed over 30 AI companies in Colombia, Mexico, and Brazil, advises governments on national AI policy, and was named one of Forbes Colombia's 30 Under 40.",
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
  },
];

function SpeakerModal({ speaker, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="modal-header">
          <div
            className="modal-avatar"
            style={{ background: speaker.color + '22', borderColor: speaker.color + '55' }}
          >
            <span style={{ color: speaker.color }}>{speaker.initials}</span>
          </div>
          <div className="modal-identity">
            <h2 className="modal-name">{speaker.name}</h2>
            <p className="modal-title">{speaker.title}</p>
            <p className="modal-company" style={{ color: speaker.color }}>{speaker.company}</p>
            <div className="modal-socials">
              <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href={speaker.twitter} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter / X">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="modal-talk">
          <span className="modal-talk-label">Speaking on</span>
          <p className="modal-talk-title">"{speaker.talk}"</p>
        </div>

        <p className="modal-bio">{speaker.bio}</p>
      </div>
    </div>
  );
}

export default function Speakers() {
  const [modal, setModal] = useState(null);

  return (
    <section id="speakers">
      <div className="container">
        <p className="section-label">Featured Speakers</p>
        <h2 className="section-title">Learn from the best</h2>
        <p className="section-subtitle" style={{ marginBottom: '48px' }}>
          Practitioners and leaders who are building and scaling AI in the real world.
        </p>
        <div className="speakers-grid">
          {SPEAKERS.map((s) => (
            <div
              key={s.name}
              className="speaker-card"
              onClick={() => setModal(s)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setModal(s)}
              aria-label={`View profile for ${s.name}`}
            >
              <div className="speaker-front">
                <div
                  className="speaker-avatar"
                  style={{ background: s.color + '22', borderColor: s.color + '55' }}
                >
                  <span style={{ color: s.color }}>{s.initials}</span>
                </div>
                <h3 className="speaker-name">{s.name}</h3>
                <div className="speaker-socials">
                  <a
                    href={s.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="LinkedIn"
                    onClick={e => e.stopPropagation()}
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href={s.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Twitter / X"
                    onClick={e => e.stopPropagation()}
                  >
                    <TwitterIcon />
                  </a>
                </div>
                <p className="speaker-title">{s.title}</p>
                <p className="speaker-company" style={{ color: s.color }}>{s.company}</p>
                <p className="speaker-hint">Click for full profile →</p>
              </div>

              <div className="speaker-bio-overlay">
                <p className="speaker-bio-text">{s.bio}</p>
                <span className="speaker-bio-cta">Open full profile →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal && <SpeakerModal speaker={modal} onClose={() => setModal(null)} />}
    </section>
  );
}
