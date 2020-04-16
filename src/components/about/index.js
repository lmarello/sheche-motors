import React from "react";
import "./about.css";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.services = [
      { id: 1, name: "Mecánica general", icon:"icon-motor", description:"La mejor atención para ti y para tu vehículo y siempre elaboramos un presupuesto personalizado y sin compromiso."},
      { id: 2, name: "Mantenimiento", icon:"icon-tacometro", description:"La mejor atención para ti y para tu vehículo y siempre elaboramos un presupuesto personalizado y sin compromiso."  },
      { id: 3, name: "Electricidad", icon:"icon-foco", description:"La mejor atención para ti y para tu vehículo y siempre elaboramos un presupuesto personalizado y sin compromiso."  },
      { id: 4, name: "Personalización", icon:"icon-optica", description:"La mejor atención para ti y para tu vehículo y siempre elaboramos un presupuesto personalizado y sin compromiso."  }
    ];
  }

  renderServices() {
    return (
      <React.Fragment>
        {this.services.map(x => {
          return (
            <div className="col-12 mb-4  mt-4 col-md-6 col-lg-3 mt-lg-0 mb-lg-0 container p-0 m-0 container-service">
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
            {/* <div className="__section-title-about">Servicios</div> */}
            <div className="__section-title">SERVICIOS</div>
            <div className="custom-hr top"></div>
            <div className="row col-12 p-0 m-0 services-container">{this.renderServices()}</div>
            <div className="custom-hr bottom"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default About;
