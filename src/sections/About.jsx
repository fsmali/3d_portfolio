import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const leftVariant = {
  hidden: { opacity: 0, x: -70 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: 'easeOut',
    },
  }),
};

const rightVariant = {
  hidden: { opacity: 0, x: 70 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: 'easeOut',
    },
  }),
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about__container">
        <div className="about__side">
          <motion.div
            className="about__box"
            variants={leftVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0}
          >
            <h3>About Me</h3>
            <p>
              I’m a junior full stack web developer focused on building clean,
              modern, and responsive websites.
            </p>
          </motion.div>

          <motion.div
            className="about__box"
            variants={leftVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0.15}
          >
            <h3>What I Enjoy</h3>
            <p>
              I enjoy learning by building and exploring interactive 3D web
              experiences.
            </p>
          </motion.div>
        </div>

        <div className="about__middle" />

        <div className="about__side">
          <motion.div
            className="about__box"
            variants={rightVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0.05}
          >
            <h3>Skills</h3>
            <p>HTML, CSS, JavaScript, React, Node.js, Express, MongoDB</p>
          </motion.div>

          <motion.div
            className="about__box"
            variants={rightVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0.2}
          >
            <h3>Goal</h3>
            <p>
              My goal is to create engaging digital experiences that combine
              clean UI with motion and 3D.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
