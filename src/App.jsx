import { useState } from 'react';
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

  return (
    <HashRouter>
      {!loaded && <LoadingScreen onFinish={() => setLoaded(true)} />}
      <div className="site-bg" aria-hidden="true">
        <img src="/logo.png" alt="" />
      </div>
      <CursorGlow />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}
