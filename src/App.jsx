import { useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import TechStack from './sections/TechStack';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('tuyife-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  } catch {
    void 0;
    return 'dark';
  }
}

function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <TechStack />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('tuyife-theme', theme);
    } catch {
      void 0;
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#f6f7f9' : '#050505');
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <HashRouter>
      {!loaded && <LoadingScreen onFinish={() => setLoaded(true)} />}
      <div className="site-bg" aria-hidden="true">
        <img src="/logo.png" alt="" />
      </div>
      <CursorGlow />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}
