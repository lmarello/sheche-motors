import React from "react";
import "./contact.css";
import logoUrl from '../../images/logo.svg';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.contactLinks = {
      instagram : "https://www.instagram.com/sheche_motors/",
      facebook: "https://es-la.facebook.com/pages/category/Product-Service/Sheche-Motors-1715543545417570/",
      whatsapp: "https://api.whatsapp.com/send?phone=541124501000",
      youtube: "https://www.youtube.com/channel/UCMr6qWytkqGcz-yTyfeYmAA"
    }
  }

  renderMap(){
    return (
      <React.Fragment>
        <div className="col-12">
              <div className="container google-maps">
                <iframe
                  id="__map-location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.154117483007!2d-58.72037298519345!3d-34.65081056749756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbfc10fba83b7%3A0xec61f00545572de8!2sAME%2C%20Alejandro%20Sullivan%201883%2C%20B1722%20Merlo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1582677272467!5m2!1ses-419!2sar"
                  frameBorder="0"
                  allowFullScreen=""
                ></iframe>
              </div>
        </div>
      </React.Fragment>
    )
  }

  renderSocial(){
    return (
      <React.Fragment>
            <div className="col-12 social-list">
                <ul className="m-0 p-0">
                  <li>
                      <a href={this.contactLinks['whatsapp']} target="_blank" rel="noopener noreferrer">
                        <span className="icon-whatsapp icon-contact"></span>
                      </a>
                  </li>
                  <li>
                      <a href={this.contactLinks['facebook']} target="_blank" rel="noopener noreferrer">
                        <span className="icon-facebook icon-contact"></span>
                      </a>
                  </li>
                  <li>
                      <a href={this.contactLinks['instagram']} target="_blank" rel="noopener noreferrer">
                        <span className="icon-instagram icon-contact"></span>
                      </a>
                  </li>
                  <li>
                      <a href={this.contactLinks['youtube']} target="_blank" rel="noopener noreferrer">
                        <span className="icon-youtube icon-contact"></span>
                      </a>
                  </li>
                </ul>
              </div>
  
      </React.Fragment>
    )
  }

  render() {
    return (
      <React.Fragment>
        <div id="section-contact" className="__section-contact __height-100-vh text-center">
          <div className="contact-body container">
            <div className="__section-title mb-2 pt-4 w-100">CONTACTO</div>
              <div className="__contact-info row col-12 m-0">

                <div className="row col-12 m-0 p-0 __containder-data">

                  <div className="col-12 col-md-3 text-center">
                    <div className="__contact-data-title" >Dirección</div>
                    <div className="__contact-data-detail">Sullivan 1883 - Merlo Bs.As.</div>
                  </div>

                    <div className="col-12 col-md-3 text-center">
                      <div className="__contact-data-title" >Teléfono</div>
                      <div className="__contact-data-detail">+54 11 2450-1000</div>
                    </div>

                    <div className="col-12 col-md-3 text-center">
                      <div className="__contact-data-title" >Email</div>
                      <div className="__contact-data-detail">shechemotors@outlook.com</div>
                    </div>

                    <div className="col-12 col-md-3 text-center">
                      <div className="__contact-data-title" >Horario</div>
                      <div className="__contact-data-detail">LUN a SAB - 10 a 20hs.</div>
                    </div>

              
                  {/* <div className="col-12 col-md-6">
                    {this.renderMap()}
                  </div> */}
                </div>

                <div className="col-12 __contact-footer">
                  {this.renderSocial()}
                  <p className="__contact-copyright">
                    ©Copyright <span>{new Date().getFullYear()}</span> SHECHE Motors | All Rights Reserved{" "}
                  </p>
                  <img className="__contact-logo" src={logoUrl} alt="" />
                </div>
            </div>
          </div>

          <div className="col-12">
            <span className="__LGM">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/leonel-marello-0ba4a262/">developed by lmarello</a>
            </span>
          </div>

        </div>
      </React.Fragment>
    );
  }
}
export default Contact;
