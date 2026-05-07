import './Navbar.css';
import { FaHome } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="#home" className="navbar__logo">
          <FaHome className="home_icon" />
        </a>

        <nav className="navbar__nav">
          <ul className="navbar__list">
            {navLinks.map((link) => (
              <li key={link.label} className="navbar__item">
                <a href={link.href} className="navbar__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="navbar_mail">
          <a
            className="navbar_mail_a"
            href="mailto:fatih.ali.dede@gmail.com"
            aria-label="Email"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
