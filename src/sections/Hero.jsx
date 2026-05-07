import './Hero.css';
// import Scene from '../three/Scene';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__container">
        <div className="hero__left">
          <p className="hero__subtitle">Junior Full Stack Web Developer</p>

          <h1 className="hero__title">
            Fatih Ali <span>Dede</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
