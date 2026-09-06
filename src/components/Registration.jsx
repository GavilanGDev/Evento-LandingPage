import { useState } from 'react';

export default function Registration() {
  const [form, setForm] = useState({ name: '', email: '', company: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your full name.';
    if (!form.email.trim()) {
      e.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!form.company.trim()) e.company = 'Please enter your company or organization.';
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
        <p className="section-label">Register</p>
        <h2 className="section-title">Secure your spot</h2>
        <p className="section-subtitle" style={{ marginBottom: '48px' }}>
          Seats are limited. Register now to guarantee your place at NeonStack Summit 2026.
        </p>

        {submitted ? (
          <div className="reg-success">
            <span className="reg-success-icon">✓</span>
            <h3 className="reg-success-title">You're registered!</h3>
            <p className="reg-success-text">
              Welcome, {form.name}! We've sent a confirmation to{' '}
              <strong>{form.email}</strong>. We can't wait to see you in San Francisco.
            </p>
          </div>
        ) : (
          <form className="reg-form" onSubmit={handleSubmit} noValidate>
            <div className="reg-field">
              <label className="reg-label" htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className={`reg-input ${errors.name ? 'reg-input--error' : ''}`}
                placeholder="Jane Smith"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <span className="reg-error">{errors.name}</span>}
            </div>

            <div className="reg-field">
              <label className="reg-label" htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                className={`reg-input ${errors.email ? 'reg-input--error' : ''}`}
                placeholder="jane@company.com"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <span className="reg-error">{errors.email}</span>}
            </div>

            <div className="reg-field">
              <label className="reg-label" htmlFor="company">Company / Organization</label>
              <input
                id="company"
                name="company"
                type="text"
                className={`reg-input ${errors.company ? 'reg-input--error' : ''}`}
                placeholder="Acme Corp"
                value={form.company}
                onChange={handleChange}
              />
              {errors.company && <span className="reg-error">{errors.company}</span>}
            </div>

            <button type="submit" className="btn-primary reg-submit">
              Register for Free →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
