import { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

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

function SpeakerModal({ speaker, speakingOnLabel, onClose }) {
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
          <span className="modal-talk-label">{speakingOnLabel}</span>
          <p className="modal-talk-title">"{speaker.talk}"</p>
        </div>

        <p className="modal-bio">{speaker.bio}</p>
      </div>
    </div>
  );
}

export default function Speakers() {
  const { t } = useLanguage();
  const s = t.speakers;
  const [modal, setModal] = useState(null);

  return (
    <section id="speakers">
      <div className="container">
        <p className="section-label animate-item" style={{ '--delay': '0s' }}>{s.label}</p>
        <h2 className="section-title animate-item" style={{ '--delay': '0.1s' }}>{s.title}</h2>
        <p className="section-subtitle animate-item" style={{ '--delay': '0.2s', marginBottom: '48px' }}>
          {s.subtitle}
        </p>
        <div className="speakers-grid">
          {s.people.map((person, i) => (
            <div
              key={person.name}
              className="speaker-card animate-item"
              style={{ '--delay': `${0.3 + i * 0.1}s` }}
              onClick={() => setModal(person)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setModal(person)}
              aria-label={`View profile for ${person.name}`}
            >
              <div className="speaker-front">
                <div
                  className="speaker-avatar"
                  style={{ background: person.color + '22', borderColor: person.color + '55' }}
                >
                  <span style={{ color: person.color }}>{person.initials}</span>
                </div>
                <h3 className="speaker-name">{person.name}</h3>
                <div className="speaker-socials">
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="LinkedIn"
                    onClick={e => e.stopPropagation()}
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href={person.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Twitter / X"
                    onClick={e => e.stopPropagation()}
                  >
                    <TwitterIcon />
                  </a>
                </div>
                <p className="speaker-title">{person.title}</p>
                <p className="speaker-company" style={{ color: person.color }}>{person.company}</p>
                <p className="speaker-hint">{s.hint}</p>
              </div>

              <div className="speaker-bio-overlay">
                <p className="speaker-bio-text">{person.bio}</p>
                <span className="speaker-bio-cta">{s.bioCta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal && (
        <SpeakerModal
          speaker={modal}
          speakingOnLabel={s.speakingOn}
          onClose={() => setModal(null)}
        />
      )}
    </section>
  );
}
