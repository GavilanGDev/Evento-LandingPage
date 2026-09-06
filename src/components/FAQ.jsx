import { useState } from 'react';

const FAQS = [
  {
    q: 'Where is NeonStack Summit 2026 held?',
    a: 'The event takes place at the Moscone West Convention Center in San Francisco, CA, on October 17–18, 2026. The venue is easily accessible by BART, Muni, and ride-share services, with several partner hotels nearby offering discounted rates for attendees.',
  },
  {
    q: 'What is included in the registration fee?',
    a: 'Your ticket covers full access to all keynotes, breakout sessions, and workshops across both days. Also included: breakfast, lunch, and coffee breaks each day, plus the closing happy hour on Day 1. Workshop materials and digital copies of all slide decks are included as well.',
  },
  {
    q: 'Is there a virtual / remote attendance option?',
    a: 'Yes! We offer a live-stream ticket that gives you access to all Main Stage sessions and selected breakout talks in real time. Virtual attendees also get 60-day on-demand access to all recorded sessions after the event ends.',
  },
  {
    q: 'Can I get a refund if I can no longer attend?',
    a: 'Full refunds are available up to 30 days before the event (September 17, 2026). Between 30 and 14 days out, we offer a 50% refund or a free transfer of your ticket to another person. No refunds are issued within 14 days of the event, but ticket transfers remain available at no charge.',
  },
  {
    q: 'How do I submit a talk or workshop proposal?',
    a: 'Our CFP (Call for Papers) is open until July 31, 2026. Head to the Speak page on our website to submit your proposal. We welcome submissions of all kinds — case studies, deep dives, live demos, and hands-on workshops. All submissions are reviewed by our technical committee and we notify all applicants within four weeks of the deadline.',
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
          Can't find the answer you need? Email us at hello@neonstack.dev
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
