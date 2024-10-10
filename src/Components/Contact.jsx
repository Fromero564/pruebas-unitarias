import './Contact.css';
import { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        mensaje: ''
    });

    const [recaptchaVerified, setRecaptchaVerified] = useState(false); // Estado para verificar si el captcha está validado
    const [formSubmitted, setFormSubmitted] = useState(false); // Estado para verificar si el formulario fue enviado
    const recaptchaRef = useRef(null);

    // Maneja los cambios en los campos del formulario
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Comprueba si todos los campos están completos
    const isFormComplete = () => {
        return Object.values(formData).every(field => field.trim() !== '');
    };

    // Maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (recaptchaVerified) {
            const recaptchaValue = recaptchaRef.current.getValue(); // Obtén el valor del reCAPTCHA

            // Crear el objeto que se enviará
            const dataToSend = {
                ...formData,
                recaptchaResponse: recaptchaValue
            };

            try {
                const response = await fetch('/submit-form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-React-Server-Location': 'Agregar valor' // Reemplaza con el valor del servidor
                    },
                    body: JSON.stringify(dataToSend) // Convierte el objeto a formato JSON
                });

                if (response.ok) {
                    // Respuesta exitosa
                    console.log("Formulario enviado con éxito", dataToSend);
                    setFormSubmitted(true); // Cambia el estado para indicar que el formulario fue enviado

                    // Reinicia el formulario
                    setFormData({
                        nombre: '',
                        apellido: '',
                        email: '',
                        telefono: '',
                        mensaje: ''
                    });
                    setRecaptchaVerified(false); // Restablecer el estado del captcha
                    recaptchaRef.current.reset(); // Reiniciar el reCAPTCHA
                } else {
                    // Manejo de errores en la respuesta
                    console.error("Error al enviar el formulario", response.status);
                }
            } catch (error) {
                // Manejo de errores de red
                console.error("Error de red:", error);
            }
        } else {
            console.log("El reCAPTCHA no ha sido verificado");
        }
    };

    // Función para manejar el cambio en el reCAPTCHA
    const handleRecaptchaChange = (value) => {
        if (value && isFormComplete()) {
            setRecaptchaVerified(true); 
            console.log("reCAPTCHA verificado, valor:", value);
        } else {
            setRecaptchaVerified(false); 
            console.log("reCAPTCHA no verificado o formulario incompleto");
        }
    };

    return (
        <section className="contact-container" id="contacto">
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3336.4861064666434!2d-60.314015!3d-33.253764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDE1JzEzLjYiUyA2MMKwMTgnNTAuNSJX!5e0!3m2!1ses!2sar!4v1727995132158!5m2!1ses!2sar"
                  
                    className='map-class'
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                ></iframe>
            </div>
            <div className="form-container">
                <h2>Contacto</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nombre:</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Apellido:</label>
                        <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Teléfono:</label>
                        <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Mensaje:</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required />
                    </div>
                    <div className="div-captcha-submit">
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={import.meta.env.VITE_SITE_KEY}
                            onChange={handleRecaptchaChange} 
                        />
                        <button type="submit" disabled={!recaptchaVerified || !isFormComplete()} style={{ marginLeft: '10px' }}>
                            Enviar
                        </button>
                    </div>
                </form>
             
            </div>
        </section>
    );
};

export default Contact;
 