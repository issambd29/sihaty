import "./Header.css";

function Header() {
  return (
    <nav className="navbar">
      <div className="logo">Ma Santé</div>

      <ul className="nav-links">
        <li><a href="#accueil">Accueil</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#conseils">Conseils</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Header;
