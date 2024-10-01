import './Presentation.css'
import Carousel from 'react-bootstrap/Carousel';
import Agua from '../assets/img/Presentation/aguapresentacion.jpg'



const Presentation = ()=>{
    return(
        <section className='Presentation'>
           <Carousel fade>
      <Carousel.Item interval={1000}>
      <img
          className="d-block w-100"
          src={Agua}
          style={{ width: '100vw', height: '100vh' }}
          alt="Presentación SmartAqua"
        />
        <Carousel.Caption>
          <h3>TECNOLOGÍA AL SERVICIO DEL AGUA</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img
          className="d-block w-100"
          src={Agua}
          style={{ width: '100vw', height: '100vh' }}
          alt="Presentación SmartAqua"
        />
        <Carousel.Caption>
        <h3>TECNOLOGÍA AL SERVICIO DEL AGUA</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img
          className="d-block w-100"
          src={Agua}
          style={{ width: '100vw', height: '100vh' }}
          alt="Presentación SmartAqua"
        />
        <Carousel.Caption>
        <h3>TECNOLOGÍA AL SERVICIO DEL AGUA</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </section>
    )
}

export default Presentation