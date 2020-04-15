import React from "react";
import "./contact.css";

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

  render() {
    return (
      <React.Fragment>
        <div
          id="section-contact"
          className="__section-contact __height-100-vh text-center"
        >
          <div className="__section-title mb-2">CONTACTO</div>
          <div className="row col-12 p-0 m-0">
            
          <div className="col-12 social-list">
              <ul className="m-0 p-0">
                <li>
                  <div>
                    <a href={this.contactLinks['whatsapp']} target="_blank" rel="noopener noreferrer">
                      <span className="icon-whatsapp icon-contact"></span>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href={this.contactLinks['facebook']} target="_blank" rel="noopener noreferrer">
                      <span className="icon-facebook icon-contact"></span>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href={this.contactLinks['instagram']} target="_blank" rel="noopener noreferrer">
                      <span className="icon-instagram icon-contact"></span>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href={this.contactLinks['youtube']} target="_blank" rel="noopener noreferrer">
                      <span className="icon-youtube icon-contact"></span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            
          <div className="col-12 __contact-info">

              <span className="__info-title">
                <span className="__info-data">
                  <a
                    href="https://www.google.com/maps/place/AME,+Alejandro+Sullivan+1883,+B1722+Merlo,+Provincia+de+Buenos+Aires/@-34.6508106,-58.720373,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcbfc10fba83b7:0xec61f00545572de8!8m2!3d-34.650815!4d-58.7181843"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sullivan 1883 - Merlo Bs.As.
                  </a>
                </span>
              </span>
            </div>
            
          <div className="col-12">
              <div className="container google-maps">
                <iframe
                  id="__map-location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.154117483007!2d-58.72037298519345!3d-34.65081056749756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbfc10fba83b7%3A0xec61f00545572de8!2sAME%2C%20Alejandro%20Sullivan%201883%2C%20B1722%20Merlo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1582677272467!5m2!1ses-419!2sar"
                  frameborder="0"
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>
 
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Contact;
