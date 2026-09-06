import { useLanguage } from '../LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-inner animate-item" style={{ '--delay': '0s' }}>
        <span className="footer-logo">
          AI Business <span>Summit</span> 2026
        </span>
        <span className="footer-copy">{t.footer.copy}</span>
      </div>
    </footer>
  );
}
