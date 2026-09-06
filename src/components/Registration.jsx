import { useState } from 'react';
import { useLanguage } from '../LanguageContext';

export default function Registration() {
  const { t } = useLanguage();
  const r = t.registration;

  const [form, setForm] = useState({ name: '', email: '', company: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = r.errName;
    if (!form.email.trim()) {
      e.email = r.errEmailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = r.errEmailInvalid;
    }
    if (!form.company.trim()) e.company = r.errCompany;
    return e;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  }

  return (
    <section id="registration">
      <div className="container">
        <p className="section-label animate-item" style={{ '--delay': '0s' }}>{r.label}</p>
        <h2 className="section-title animate-item" style={{ '--delay': '0.1s' }}>{r.title}</h2>
        <p className="section-subtitle animate-item" style={{ '--delay': '0.2s', marginBottom: '48px' }}>
          {r.subtitle}
        </p>

        {submitted ? (
          <div className="reg-success animate-item" style={{ '--delay': '0.3s' }}>
            <span className="reg-success-icon">✓</span>
            <h3 className="reg-success-title">{r.successTitle}</h3>
            <p className="reg-success-text">
              {r.successText(form.name, form.email)}
            </p>
          </div>
        ) : (
          <form className="reg-form" onSubmit={handleSubmit} noValidate>
            <div className="reg-field animate-item" style={{ '--delay': '0.3s' }}>
              <label className="reg-label" htmlFor="name">{r.nameLabel}</label>
              <input
                id="name"
                name="name"
                type="text"
                className={`reg-input ${errors.name ? 'reg-input--error' : ''}`}
                placeholder={r.namePlaceholder}
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <span className="reg-error">{errors.name}</span>}
            </div>

            <div className="reg-field animate-item" style={{ '--delay': '0.4s' }}>
              <label className="reg-label" htmlFor="email">{r.emailLabel}</label>
              <input
                id="email"
                name="email"
                type="email"
                className={`reg-input ${errors.email ? 'reg-input--error' : ''}`}
                placeholder={r.emailPlaceholder}
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <span className="reg-error">{errors.email}</span>}
            </div>

            <div className="reg-field animate-item" style={{ '--delay': '0.5s' }}>
              <label className="reg-label" htmlFor="company">{r.companyLabel}</label>
              <input
                id="company"
                name="company"
                type="text"
                className={`reg-input ${errors.company ? 'reg-input--error' : ''}`}
                placeholder={r.companyPlaceholder}
                value={form.company}
                onChange={handleChange}
              />
              {errors.company && <span className="reg-error">{errors.company}</span>}
            </div>

            <button
              type="submit"
              className="btn-primary reg-submit animate-item"
              style={{ '--delay': '0.6s' }}
            >
              {r.submitBtn}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
