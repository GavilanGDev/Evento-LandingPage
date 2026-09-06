import { useState } from 'react';

const FAQS = [
  {
    q: 'Where exactly is the event located?',
    a: 'The AI Business Summit 2026 takes place at the EPAM Systems office in Bogotá, Colombia. The exact address and directions will be sent to registered attendees by email one week before the event. The venue is located in the Chicó Norte business district and is accessible by TransMilenio, taxi, and ride-share services.',
  },
  {
    q: 'Is there a registration fee?',
    a: 'Attendance is free for all registered participants. Seats are limited, so we encourage you to register early to guarantee your spot. Registration includes access to all sessions and workshops, lunch, coffee breaks, and digital copies of all presentation materials.',
  },
  {
    q: 'Who should attend this summit?',
    a: 'The summit is designed for business executives, technology leaders, and professionals who want to understand how AI can drive value in their organizations. You do not need a technical background to benefit — the content is focused on strategy, decision-making, and real-world applications rather than programming or data science.',
  },
  {
    q: 'Will the sessions be recorded?',
    a: 'Yes. All keynotes and panel sessions will be recorded and made available to registered attendees within one week after the event. Hands-on workshop content will not be recorded to preserve the interactive nature of those sessions.',
  },
  {
    q: 'What language will the sessions be in?',
    a: 'All sessions will be delivered in Spanish. Some presentation materials and resources may also be available in English upon request.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  function toggle(i) {
    setOpen(open === i ? null : i);
  }

  return (
    <section id="faq">
      <div className="container">
        <p className="section-label">FAQ</p>
        <h2 className="section-title">Frequently asked questions</h2>
        <p className="section-subtitle" style={{ marginBottom: '48px' }}>
          Still have questions? Write to us at summit@epam.com
        </p>
        <div className="faq-list">
          {FAQS.map((item, i) => (
            <div key={i} className={`faq-item ${open === i ? 'faq-item--open' : ''}`}>
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
