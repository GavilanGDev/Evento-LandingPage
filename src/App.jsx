import './App.css';
import './components/Navbar.css';
import { LanguageProvider } from './LanguageContext';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './components/Hero.css';
import './components/About.css';
import './components/Program.css';
import './components/Speakers.css';
import './components/Map.css';
import './components/FAQ.css';
import './components/Gallery.css';
import './components/Registration.css';
import './components/Footer.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Program from './components/Program';
import Speakers from './components/Speakers';
import Map from './components/Map';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import Registration from './components/Registration';
import Footer from './components/Footer';

export default function App() {
  useScrollAnimation();
  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
      <About />
      <Program />
      <Speakers />
      <Map />
      <FAQ />
      <Gallery />
      <Registration />
      <Footer />
    </LanguageProvider>
  );
}
