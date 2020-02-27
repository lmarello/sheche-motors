import React from "react";
import "./contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div
          id="section-contact"
          className="__section-contact __height-100-vh text-center"
        >
          <div className="__section-title">CONTACTO</div>
          <div className="row col-12">
            <div className="col-12 col-md-4 __contact-info">
              <span className="__info-title">
                Teléfono
                <span className="__info-data">15 2450 1000</span>
              </span>

              <span className="__info-title">
                Instagram
                <span className="__info-data">
                  <a
                    href="https://www.instagram.com/sheche_motors/"
                    target="_blank"
                  >
                    SHECHE_MOTORS
                  </a>
                </span>
              </span>

              <span className="__info-title">
                Facebook
                <span className="__info-data">
                  <a
                    href="https://es-la.facebook.com/pages/category/Product-Service/Sheche-Motors-1715543545417570/"
                    target="_blank"
                  >
                    SHECHE MOTORS
                  </a>
                </span>
              </span>

              <span className="__info-title">
                Ubicación
                <span className="__info-data">
                  <a
                    href="https://www.google.com/maps/place/AME,+Alejandro+Sullivan+1883,+B1722+Merlo,+Provincia+de+Buenos+Aires/@-34.6508106,-58.720373,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcbfc10fba83b7:0xec61f00545572de8!8m2!3d-34.650815!4d-58.7181843"
                    target="_blank"
                  >
                    Sullivan 1883 - Merlo Bs.As.
                  </a>
                </span>
              </span>
            </div>
            <div className="col-12 col-md-8">
              <iframe
                id="__map-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.154117483007!2d-58.72037298519345!3d-34.65081056749756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbfc10fba83b7%3A0xec61f00545572de8!2sAME%2C%20Alejandro%20Sullivan%201883%2C%20B1722%20Merlo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1582677272467!5m2!1ses-419!2sar"
                frameborder="0"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Contact;
