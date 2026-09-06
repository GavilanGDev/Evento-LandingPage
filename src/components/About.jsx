import { useLanguage } from '../LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about">
      <div className="container about-layout">
        <div className="about-text">
          <p className="section-label animate-item" style={{ '--delay': '0s' }}>{a.label}</p>
          <h2 className="section-title animate-item" style={{ '--delay': '0.1s' }}>
            {a.title.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h2>
          <p className="about-body animate-item" style={{ '--delay': '0.2s' }}>{a.body1}</p>
          <p className="about-body animate-item" style={{ '--delay': '0.3s' }}>{a.body2}</p>
          <p className="about-body animate-item" style={{ '--delay': '0.4s' }}>{a.body3}</p>
        </div>
        <div className="about-highlights">
          {a.highlights.map((item, i) => (
            <div
              key={item.title}
              className="about-card animate-item"
              style={{ '--delay': `${0.1 + i * 0.1}s` }}
            >
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
