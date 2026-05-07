import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';
import { IoLocationOutline } from 'react-icons/io5';

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
            <h2>ALI</h2>
            <p className="about__location">
              <IoLocationOutline />
              United Kingdom
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
            <ul>
              <h2>Skills</h2>
              <li>HTML & CSS & JS</li>
              <li>MERN STACK</li>
              <li>THREE.JS & WEBGL</li>
              <li>PYTHON & DJANGO</li>
              <li>JAVA & SPRING</li>
              <li>BLENDER</li>
            </ul>
          </motion.div>

          <motion.div
            className="about__box"
            variants={rightVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0.2}
          >
            <h2>My Goal</h2>
            <p>Build interactive 3D experiences and full Stack web sites.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
