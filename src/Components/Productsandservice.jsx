import './Productsandservice.css';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';

const Productsandservice = () => {
  const [activeKey, setActiveKey] = useState(null);
  const [activeKey1, setActiveKey1] = useState(null);

  const handleAccordionClick = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const handleAccordionClick1 = (key) => {
      setActiveKey1(activeKey1 === key ? null : key);
    };

  return (
    <section className="products-section" id="productos">
      <h1>PRODUCTOS Y SERVICIOS</h1>
      <div className="products-grid">
        
        <Accordion activeKey={activeKey}>
          
          
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <div
                className="product-item"
                onClick={() => handleAccordionClick("0")}
              >
                Telemetría de sistemas de bombeo
              </div>
            </Accordion.Header>
            <Accordion.Body>
            Controles ON/OFF: <br/>
            Sistemas de encendido/apagado de bombas y monitoreo y control de variables discretas y
            analógicas<br/>
            Sistema Avanzado de Regulación de Presión:<br/>
             Estado del Arte en Regulación de Presión, implementación de regulación de velocidad y
             sistemas de Telemetría IoT a fin de generar Ahorro energético e innumerables beneficios (cuidado
             del recurso, estado de redes de distribución, ahorro de cloro, etc.)
            </Accordion.Body>
          </Accordion.Item>
          
          
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div
                className="product-item"
                onClick={() => handleAccordionClick("1")}
              >
                Telemetría y Automatización de plantas Potabilizadoras
              </div>
            </Accordion.Header>
            <Accordion.Body>
             Control de proceso de cloración, decantado, osmosis inversa, sedimentación, filtrado, ajuste de
             PH y dosificación de cloro. Para ello se emplean controladores industriales y propietarios, así como
             interfaces para el comando en forma local y remoto del proceso de la planta. <br/>
             Mejoras integrales de plantas para optimizar operación y eficiencia energética.
            </Accordion.Body>
          </Accordion.Item>
           </Accordion>

          <Accordion activeKey={activeKey1}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <div
                className="product-item"
                onClick={() => handleAccordionClick1("0")}
              >
                Monitoreo de Presión
              </div>
            </Accordion.Header>
            <Accordion.Body>
             Se proveen sensores para lectura remota de variables de presión de agua, se aplica a áreas
             urbanas y rurales. Mediante la plataforma de control SmartAqua, es posible visualizar un mapa de
                presiones a fin de detectar posibles fallas en la red y realizar mantenimiento preventivo.
            </Accordion.Body>
          </Accordion.Item>
        
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div
                className="product-item"
                onClick={() => handleAccordionClick1("1")}
              >
                Sistemas SmartCity
              </div>
            </Accordion.Header>
            <Accordion.Body>
            En Alianza comercial con la Empresa Ingeniería SCH SRL, se brindan soluciones de
Semaforización y telegestión de tableros eléctricos.<br/>
Semaforización: <br/>
El controlador de Semáforos MS-103 con conectividad IoT y GPS permite sincronizar tramos
complejos en el egido urbano y rutas, así como brindar monitoreo, diagnóstico y control en forma
remota mediante redes IoT.<br/>
 Tableros de Telegestión:<br/>
Los tableros de Telegestión Versión compacto SCH-AR-01-CMP y versión full SCH-AR-01 brindan
una excelente solución al control remoto de plazas, espacios verdes, permitiendo economía y
arranques por fase distribuidas, así como encendido y apagado de acuerdo con calendario solar,
todo ello con la conexión a la plataforma de SmartAqua.
            </Accordion.Body>
          </Accordion.Item>
          
        </Accordion>
      </div>
    </section>
  );
};

export default Productsandservice;
