import './Jobs.css';
import fondo from '../assets/img/Jobs/fondo.svg';
import imgtrabajo from '../assets/img/Jobs/imgtrabajo.png';
import imgtrabajo1 from '../assets/img/Jobs/imgtrabajo1.png';
import imgtrabajo2 from '../assets/img/Jobs/imgtrabajo2.png';
import imgtrabajo3 from '../assets/img/Jobs/imgtrabajo3.png';
import imgtrabajo4 from '../assets/img/Jobs/imgtrabajo4.png';

const Jobs = () => {
    return (
        <section className='jobs-background' id="clientes">
            <img src={fondo} className='img-background-jobs' alt="Nuestros trabajos" />
            <div className='content-box-jobs'>
                <div className='job-text-img'>
                    <article className='text-img-jobs'>
                        <h1>Trabajos Realizados</h1>
                        <img src={imgtrabajo} alt="trabajo publicado" />
                    </article>
                    <article className='img-jobs-only'>
                        <div>
                        <img src={imgtrabajo1} alt="trabajo publicado" />
                        </div>
                        <div>
                        <img src={imgtrabajo2} alt="trabajo publicado" />
                        </div>
                        <div>
                        <img src={imgtrabajo3} alt="trabajo publicado" />
                        </div>
                        <div>
                        <img src={imgtrabajo4}  alt="trabajo publicado" />
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Jobs;
