import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./gallery.css";
import Sponsors from "../sponsors";
import Gallery2 from "../gallery2";

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.images = [ 
      {id: 1, title: "Soy la foto 1", src:'https://images.unsplash.com/photo-1543747255-94b72995ac74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', desc: "Taken at the 76th Goodwood Members’ Meeting at Goodwood Motor Circuit in Chichester, England." },
      {id: 2, title: "Soy la foto 2", src:'https://images.unsplash.com/photo-1547025603-ef800f02690e?ixlib=rb-1.2.1&auto=format&fit=crop&w=776&q=80', desc: "Taken at the 76th Goodwood Members’ Meeting at Goodwood Motor Circuit in Chichester, England." },
      {id: 3, title: "Soy la foto 3", src:'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', desc: "Taken at the 76th Goodwood Members’ Meeting at Goodwood Motor Circuit in Chichester, England." },
      {id: 4, title: "Soy la foto 3", src:'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', desc: "Taken at the 76th Goodwood Members’ Meeting at Goodwood Motor Circuit in Chichester, England." },
      {id: 5, title: "Soy la foto 4", src:'https://images.unsplash.com/photo-1525841508523-2aebc593a6b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80', desc: "Taken at the 76th Goodwood Members’ Meeting at Goodwood Motor Circuit in Chichester, England." },

    ]

  }

  renderCarouselItems() {
    return (
      this.images.map( x => {
        return (
          <Carousel.Item style={{"height":"60vh"}} key={x.id}>
            <img
              className="d-block w-100"
              src={x.src}
              alt={x.title}
            />
            <Carousel.Caption>
              <h3>{x.title}</h3>
              <p>
                {x.desc}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })
    )
  }

  renderCarousel(){
    return(
      <Carousel>
        {this.renderCarouselItems()}
      </Carousel>
    )
  }

  render() {
    return (
      <React.Fragment>
        <div id="section-gallery" className="__section-gallery __height-100-vh text-center">
          <div className="__section-title gallery">GALERÍA</div>
          {/* {this.renderCarousel()} */}
          <div className="__gallery2 container">
            <Gallery2 />
          </div>
          <div className="custom-hr bottom"></div>

          <Sponsors/>
        
        </div>
      </React.Fragment>
    );
  }
}
export default Gallery;
