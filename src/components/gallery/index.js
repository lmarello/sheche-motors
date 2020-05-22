import React from "react";
import "./gallery.css";
import Sponsors from "../sponsors";
import GalleryGrid from "../gallery-grid";

class Gallery extends React.Component {

  render() {
      return (
        <React.Fragment>
          <div id="galeria" className="__section-gallery __height-100-vh text-center">
            <div className="__section-title gallery">GALERÍA</div>
            <div className="__gallery2 container">
              <GalleryGrid />
            </div>
            <div className="custom-hr bottom"></div>

            <Sponsors/>
          
          </div>
        </React.Fragment>
      );
    }
}
export default Gallery;
