import './Misioncompany.css'
import Background from '../assets/img/Misioncompany/background.png'

const Misioncompany = ()=>{
    return(
      <div className="smart-aqua-container" style={{ backgroundImage: `url(${Background})` }}>
      <div className="content-container">
        <div className="left-section">
          <h2>"Revolucionando el futuro del agua"</h2>
          <p>
            SmartAqua es una empresa dedicada a ofrecer soluciones inteligentes y sostenibles
            para el bombeo y la distribución de agua potable. Nos dedicamos a optimizar el uso
            de energía y recursos, reduciendo el impacto ambiental y garantizando la eficiencia
            en cada etapa del proceso.
          </p>
        </div>
        <div className="right-section">
          <h2>Nuestros valores:</h2>
          <ul>
            <li>Innovación continua</li>
            <li>Sostenibilidad</li>
            <li>Compromiso con la calidad</li>
            <li>Responsabilidad social</li>
            <li>Integridad</li>
            <li>Colaboración</li>
            <li>Orientación al cliente</li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Misioncompany