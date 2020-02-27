import React from "react";
import "./about.css";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.services = [
      { id: 1, name: "Mecánica general" },
      { id: 2, name: "Mantenimiento" },
      { id: 3, name: "Electricidad" },
      { id: 4, name: "No se que mas" }
    ];
  }

  renderServices() {
    return (
      <React.Fragment>
        {this.services.map(x => {
          return (
            <div className="col-12 col-md-3 mb-5 mb-md-0">
              <div className="__card">
                <div className="__card-header">{x.name}</div>
                <div className="__card-text">La mejor atención para ti y para tu vehículo y siempre elaboramos un presupuesto personalizado y sin compromiso.</div>
                  <button type="button" className="btn btn-sheche">
                          <a href="#section-contact">VER MÁS</a>
                  </button>
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
          <div className="__section-title">SERVICIOS</div>
          <div className="container">
            <div className="row col-12">{this.renderServices()}</div>
            <div className="row col-12 mt-4">{this.renderServices()}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default About;
