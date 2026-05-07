import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import CharacterScene from './three/CharacterScene';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [contactStart, setContactStart] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const contact = document.getElementById('contact');
      if (contact) {
        setContactStart(contact.offsetTop);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <CharacterScene scrollY={scrollY} contactStart={contactStart} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
