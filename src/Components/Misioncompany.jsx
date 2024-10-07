import './Misioncompany.css'
import Background from '../assets/img/Misioncompany/background.png'

const Misioncompany = ()=>{
    return(
      <section className="smart-aqua-container" style={{ backgroundImage: `url(${Background})` }} id="empresa">
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
          <li> <i class="fa-solid fa-droplet"></i>Innovación continua</li>
            <li> <i class="fa-solid fa-droplet"></i>Sostenibilidad</li>
            <li> <i class="fa-solid fa-droplet"></i>Compromiso con la calidad</li>
            <li> <i class="fa-solid fa-droplet"></i>Responsabilidad social</li>
            <li> <i class="fa-solid fa-droplet"></i>Integridad</li>
            <li> <i class="fa-solid fa-droplet"></i>Colaboración</li>
            <li> <i class="fa-solid fa-droplet"></i>Orientación al cliente</li>
          </ul>
        </div>
      </div>
    </section>
    )
}

export default Misioncompany