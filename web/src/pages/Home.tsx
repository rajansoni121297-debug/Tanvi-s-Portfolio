import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import ProjectGrid from '../components/ProjectGrid';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

type HomeProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

export default function Home({ theme, onToggleTheme }: HomeProps) {
  return (
    <>
      <Nav theme={theme} onToggleTheme={onToggleTheme} />
      <Hero />
      <Stats />
      <About />
      <WorkExperience />
      <ProjectGrid />
      <Skills />
      <Footer />
    </>
  );
}
