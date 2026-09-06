export default function Navbar() {
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
          <a href="#about">About</a>
          <a href="#program">Schedule</a>
          <a href="#speakers">Speakers</a>
          <a href="#faq">FAQ</a>
        </div>
        <button className="navbar-cta" onClick={scrollToRegistration}>
          Register
        </button>
      </div>
    </nav>
  );
}
