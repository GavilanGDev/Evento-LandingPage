import { useState } from 'react';
import { useLanguage } from '../LanguageContext';

export default function FAQ() {
  const { t } = useLanguage();
  const f = t.faq;
  const [open, setOpen] = useState(null);

  function toggle(i) {
    setOpen(open === i ? null : i);
  }

  return (
    <section id="faq">
      <div className="container">
        <p className="section-label animate-item" style={{ '--delay': '0s' }}>{f.label}</p>
        <h2 className="section-title animate-item" style={{ '--delay': '0.1s' }}>{f.title}</h2>
        <p className="section-subtitle animate-item" style={{ '--delay': '0.2s', marginBottom: '48px' }}>
          {f.subtitle}
        </p>
        <div className="faq-list">
          {f.items.map((item, i) => (
            <div
              key={i}
              className={`faq-item animate-item ${open === i ? 'faq-item--open' : ''}`}
              style={{ '--delay': `${0.3 + i * 0.08}s` }}
            >
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{item.q}</span>
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
