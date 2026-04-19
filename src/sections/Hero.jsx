import './Hero.css';
import Scene from '../three/Scene';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__container">
        <div className="hero__left">
          <p className="hero__subtitle">Junior Full Stack Web Developer</p>

          <h1 className="hero__title">Ali Dede</h1>

          <p className="hero__description">
            I create responsive, modern web applications and experiment with
            interactive 3D experiences.
          </p>
        </div>

        <div className="hero__right">{/* <Scene /> */}</div>
      </div>
    </section>
  );
};

export default Hero;
