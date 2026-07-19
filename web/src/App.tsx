import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import ProjectGrid from './components/ProjectGrid';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="min-h-screen bg-surface text-ink">
      <Nav theme={theme} onToggleTheme={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))} />
      <Hero />
      <Stats />
      <About />
      <WorkExperience />
      <ProjectGrid />
      <Skills />
      <Footer />
    </div>
  );
}
