import { useLanguage } from '../LanguageContext';

export default function Navbar() {
  const { language, t, toggle } = useLanguage();

  function scrollToRegistration() {
    document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="navbar-logo">
          AI Business <span>Summit</span>
        </a>
        <div className="navbar-links">
          <a href="#about">{t.nav.about}</a>
          <a href="#program">{t.nav.schedule}</a>
          <a href="#speakers">{t.nav.speakers}</a>
          <a href="#faq">{t.nav.faq}</a>
        </div>
        <div className="navbar-right">
          <button className="lang-toggle" onClick={toggle} aria-label="Switch language">
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          <button className="navbar-cta" onClick={scrollToRegistration}>
            {t.nav.register}
          </button>
        </div>
      </div>
    </nav>
  );
}
