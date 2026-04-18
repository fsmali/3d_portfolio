const navLinks = [
  {
    label: 'Home',
    href: '#home',
  },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar_container">
        <a href="#home" className="navbar_logo">
          ALI
        </a>
        <nav className="navbar_nav">
          <ul className="navbar_list">
            {navLinks.map((navlink) => (
              <li key={navlink.label} className="navbar_item">
                <a href={navlink.href} className="navbar_link">
                  {navlink.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
