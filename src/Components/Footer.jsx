import './Footer.css'
import logo from '../assets/img/Footer/logofooter.svg'

const Footer = ()=>{
    return(
    
        <footer>
  <div className="footer-container">
    <div className="contact">
      <h3>CONTACTA CON NOSOTROS</h3>
      <ul>
        <li><a href="">Instagram</a></li>
        <li><a href="">Twitter</a></li>
        <li><a href="">Facebook</a></li>
        <li><a href="">LinkedIn</a></li>
      </ul>
      <p>Correo electrónico</p>
    </div>

    <div className="logo">
      <img src={logo} alt="Smart Aqua Logo"/>
    </div>

    <div className="locations">
      <h3>UBICACIONES</h3>
      <ul>
        <li>Ciudad y Provincia</li>
        <li>Dirección y número</li>
        <li>Código Postal</li>
        <li>País</li>
      </ul>
    </div>
  </div>
</footer>

    )
}

export default Footer