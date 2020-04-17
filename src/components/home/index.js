import React from "react";
import ScrollDownArrow from "../scroll-down-arrow";
import NavBar from "../navbar";
import "./home.css";

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  // componentDidMount() {
  //   var headerBg = document.getElementById('section-home');
  //   window.addEventListener('scroll', function(){
  //       // headerBg.style.opacity = 1 - +window.pageYOffset/550+'';
  //       headerBg.style.top = +window.pageYOffset+'px';
  //       headerBg.style.backgroundPositionY = - +window.pageYOffset/2+'px';
  //   });
  // }

  render() {
    return (
      <React.Fragment>
        <div
          id="section-home"
          className="__section-home __height-100-vh"
        >
            <NavBar />
            <div className="__home-title d-flex justify-content-center align-items-center text-center">
                <div className="__home-brand">
                    <span className="__brand-title">SHECHE MOTORS</span>
                    <span>servicios automotores</span>

                    <div className="__home-text col-md-6 offset-md-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                  </div>
                </div>
                <ScrollDownArrow/>
            </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
