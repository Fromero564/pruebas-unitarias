import './Header.css'
import logo from '../assets/img/Navbar/logo.png'

const Header = ()=>{
    return(
        <header className="navbar">
          <div className="logo-container">
            <img src={logo} alt="Smart Aqua Logo" className="logo" />
          </div>
            <nav className="nav-menu">
             <ul>
               <li><a href="#empresa">Empresa</a></li>
               <li><a href="#productos">Productos</a></li>
               <li><a href="#clientes">Clientes</a></li>
               <li><a href="#contacto">Contacto</a></li>
             </ul>
            </nav>
      
        </header>
    )
}

export default Header

