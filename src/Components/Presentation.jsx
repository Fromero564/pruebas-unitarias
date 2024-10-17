import './Presentation.css'
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap'; 
import Portada1 from '../assets/img/Presentation/portada1.jpg'
import Portada2 from '../assets/img/Presentation/portada2.jpg'
import Portada3 from '../assets/img/Presentation/portada3.jpg'



const Presentation = ()=>{
    return(
        <section className='Presentation'>
           <Carousel fade>
      <Carousel.Item interval={1000}>
      <img
          className="d-block w-100 "
          src={Portada1}
          style={{  height: '100vh' }}
          alt="Presentación SmartAqua"
        />
        <Carousel.Caption>
          <h3 style={{
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'}} >TECNOLOGÍA AL SERVICIO DEL AGUA</h3>
          <a href="#contacto">
          <Button variant="primary">MÁS INFORMACIÓN</Button> 
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img
          className="d-block w-100 carousel-image"
          src={Portada2}
          style={{  height: '100vh' }}
          alt="Presentación SmartAqua"
        />
        <Carousel.Caption>
       <h3 style={{
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'}}>TECNOLOGÍA AL SERVICIO DEL AGUA</h3>
        <a className="btn-responsive" href="#contacto">
          <Button variant="primary">MÁS INFORMACIÓN</Button> 
          </a> 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img
          className="d-block w-100"
          src={Portada3}
          style={{ height: '100vh' }}
          alt="Presentación SmartAqua"
        />
        <Carousel.Caption>
        <h3 style={{
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'}}>TECNOLOGÍA AL SERVICIO DEL AGUA</h3> 
         <a href="#contacto">
          <Button variant="primary" >MÁS INFORMACIÓN</Button> 
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
        </section>
    )
}

export default Presentation