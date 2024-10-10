import './Ourclients.css';
import fondo from '../assets/img/Ourclients/fondo.svg'
import icono from '../assets/img/Ourclients/Icono.svg'



const Ourclients = () => {
  return (
   <section  className='Ourclients-background'>
    <img src={fondo} className='img-background' alt="Nuestros clientes" />
    {/* <div className='content-box'> */}
        <h1>Nuestros clientes</h1>
     <div className='reviews-boxes'>
        <article className='article-class'>
                 <img src={icono} className="icon-class" alt="logo" />
                 <p>SmartAqua facilita
                 tomar decisiones,
                 anticiparse a las fallas,
                 optimizar el suministro
                 y reducir costos.</p>
           <div className='testimony-box'>
           <p>LISANDRO PAVETTI.<br/>
           ING. DE MANTENIMIENTO<br />
          PROVINCIA DE BUENOS AIRES</p>
           </div>
        </article>
        <article className='article-class'>
        <img src={icono} className="icon-class" alt="logo" />
                 <p>Recomiendo los productos y Servicios de SmartAqua y su empresa asociada Ingeniería SCH en el desarrollo de productos y de sistemas de Ciudad Inteligente.</p>
        <div className='testimony-box'>
        
         <p>MARCELO SUÁREZ.<br/>
         SUBSECRETARIO DE OBRAS Y SERVICIOS.PÉREZ(SANTA FE)<br />
         PROVINCIA DE SANTA FE</p>
        </div>

        </article>
        <article className='article-class'>
        <img src={icono} className="icon-class" alt="logo" />
                 <p>La información en tiempo real nos ha permitido tomar decisiones efectivas y ser una ciudad modelo.</p>
        <div className='testimony-box'>
            
            <p>ANALISTA DE OPERACIONES</p>
        </div>
        </article>
     </div>
    {/* </div> */}
   </section> 
  )
};

export default Ourclients;
