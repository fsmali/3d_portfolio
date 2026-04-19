import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import CharacterScene from './three/ CharacterScene';
import Projects from './sections/Projects';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <CharacterScene scrollY={scrollY} />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
}

export default App;
