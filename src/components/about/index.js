import React from "react";
import "./about.css";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      servicesVisibles : []
    }

    this.services = [
      { id: 1, name: "Mecánica general", icon:"icon-motor", description:"Tren delantero, suspension, frenos, embragues, motores y lo que sea necesario para solucionar cada problema."},
      { id: 2, name: "Mantenimiento", icon:"icon-tacometro", description:"Servicio de cambio de fluidos y filtros, cambio de lamparas, chequeos de tren delantero y suspension, revisiones generales."  },
      { id: 3, name: "Electrónica", icon:"icon-chip", description:"Escaneos de todos los modulos, soluciones de averias, reparaciones de cableados, software y hardware."  },
      { id: 4, name: "Estética", icon:"icon-optica", description:"Restauraciones de opticas, limpieza de interiores, tratamientos de pintura, lavados full."  }
    ];
  }

  componentDidMount() {
      const self = this;
      window.addEventListener('scroll', function(){
          self.services.map( (service) => {
            const serviceId = `service-${service.id}`;
            const element = document.getElementById(serviceId);
            const data = element.getBoundingClientRect();
            
            let { servicesVisibles } = self.state;
  
            if(data.top - data.height  - 100 < data.height){
                if(!servicesVisibles.includes(serviceId)){
                  servicesVisibles.push(serviceId);
                  self.setState({ servicesVisibles }, () => {
                    self.animateCSS(element, 'fadeInUp', () => {
                      element.classList.add('animated-end');
                    });
                  });
              }
            }
          });
      });
  }

  animateCSS(element, animationName, callback) {
    element.classList.add('animated', animationName)

    function handleAnimationEnd() {
      element.classList.remove('animated', animationName)
      element.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    element.addEventListener('animationend', handleAnimationEnd)
  }

  renderServices() {
    return (
      <React.Fragment>
        {this.services.map(x => {
          return (
            <div key={`service-${x.id}`} id={`service-${x.id}`} className={`col-12 mb-4  mt-4 col-md-6 col-lg-3 mt-lg-0 mb-lg-0 container p-0 m-0 container-service`}>
                <span className={`icon-service ${x.icon}`}></span>
                <div className="service-name">{x.name}</div>
                <div className="service-description">{x.description}</div>
                <div className="__service-card">
                  <div></div>
                </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <div
          id="section-about-as"
          className="__section-about __height-100-vh text-center"
        >
          <div className="container">
            <div className="__section-title">SERVICIOS</div>
            <div className="custom-hr top"></div>
            <div className="row col-12 p-0 m-0 services-container">
              {this.renderServices()}
            </div>
            <div className="custom-hr bottom"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default About;
