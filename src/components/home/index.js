import React from "react";
import ScrollDownArrow from "../scroll-down-arrow";
import NavBar from "../navbar";
import "./home.css";
import brandUrl from '../../images/sheche-brand.svg';

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
                   
                    <div className="row col-12">
                      <div className="col-12 col-md-8 offset-md-2">
                        <img className="__brand-logo" src={brandUrl} alt="" />
                      </div>
                    </div>

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
