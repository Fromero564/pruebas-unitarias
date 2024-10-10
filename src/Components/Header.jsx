import './Header.css';
import logo from '../assets/img/Navbar/logo.png';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };


  return (
    <header className="navbar">
      <div className="logo-container">
        <a href="#"><img src={logo} alt="Smart Aqua Logo" className="logo" /></a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
  
        {isOpen ? (
          <span className="close-icon">✕</span>
        ) : (
          <>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </>
        )}
      </div>
      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <ul>
        <li><a href="#empresa" onClick={closeMenu}>Empresa</a></li>
          <li><a href="#productos" onClick={closeMenu}>Productos</a></li>
          <li><a href="#clientes" onClick={closeMenu}>Clientes</a></li>
          <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
