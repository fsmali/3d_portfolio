import './Contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__left">
          <h2 className="contact__title">Let’s work together</h2>

          <p className="contact__description">
            Feel free to reach out if you want to collaborate or just connect.
          </p>

          <div className="contact__links">
            <a
              href="mailto:fatih.ali.dede@gmail.com"
              className="contact__icon-link"
              aria-label="Email"
            >
              <HiOutlineMail />
            </a>

            <a
              href="https://github.com/fsmali"
              target="_blank"
              rel="noreferrer"
              className="contact__icon-link"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ali-dede/"
              target="_blank"
              rel="noreferrer"
              className="contact__icon-link"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>

        <div className="contact__center" />
        <div className="contact__right" />
      </div>
    </section>
  );
};

export default Contact;
