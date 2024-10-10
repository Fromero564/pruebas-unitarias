import './Presentation.css'
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap'; 
import Agua from '../assets/img/Presentation/aguapresentacion.jpg'
import Semaforo from '../assets/img/Presentation/portada2.jpg'
import Datos from '../assets/img/Presentation/portada3.jpg'



const Presentation = ()=>{
    return(
        <section className='Presentation'>
           <Carousel fade>
      <Carousel.Item interval={1000}>
      <img
          className="d-block w-100 carousel-image"
          src={Agua}
          style={{  height: '100vh' }}
          alt="Presentación SmartAqua"
        />
        <Carousel.Caption>
          <h3>TECNOLOGÍA AL SERVICIO DEL AGUA</h3>
          <a href="#contacto">
          <Button variant="primary">MÁS INFORMACIÓN</Button> 
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img
          className="d-block w-100 carousel-image"
          src={Semaforo}
          style={{  height: '100vh' }}
          alt="Presentación SmartAqua"
        />
        <Carousel.Caption>
        <h3 style={{color:'#19255b',backgroundColor:'rgba(255,255,255,0.40)'}}>TECNOLOGÍA AL SERVICIO DEL AGUA</h3>
        <a href="#contacto">
          <Button variant="primary">MÁS INFORMACIÓN</Button> 
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img
          className="d-block w-100 carousel-image"
          src={Datos}
          style={{ height: '100vh' }}
          alt="Presentación SmartAqua"
        />
        <Carousel.Caption>
        <h3>TECNOLOGÍA AL SERVICIO DEL AGUA</h3>
        <a href="#contacto">
          <Button variant="primary">MÁS INFORMACIÓN</Button> 
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </section>
    )
}

export default Presentation