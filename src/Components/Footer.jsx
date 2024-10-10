import './Footer.css'
import logo from '../assets/img/Footer/logofooter.svg'

const Footer = ()=>{
    return(
    
        <footer>
  <div className="footer-container">
    <div className="contact">
      <h3>CONTACTA CON NOSOTROS</h3>
      <ul>
        <li><a href="https://www.linkedin.com/company/smartaqua-io/" target='_blank'>LinkedIn</a></li>
        <li><a href="mailto:juan@smartaqua.io">juan@smartaqua.io</a></li>
        <li>+54 9 3364 60-6700</li>
      </ul>
    </div>

    <div className="logo">
      <img src={logo} alt="Smart Aqua Logo"/>
    </div>

    <div className="locations">
      <h3>UBICACIONES</h3>
      <ul>
        <li>Parque Empresarial Constitución</li>
        <li>Villa Constitución(2919)</li>
        <li>Santa Fe</li>
        <li>Argentina</li>
      </ul>
    </div>
  </div>
</footer>

    )
}

export default Footer