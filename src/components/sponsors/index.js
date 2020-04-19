import React, { Component } from 'react'
import "./sponsors.css";
import institutoAlexanderImg from "../../images/sponsors/instituto-alexander.png";
import tinoImg from '../../images/sponsors/tino2.png';
import menaMora from '../../images/sponsors/mena-mora4.png';
import puntoMetal from '../../images/sponsors/punto-metal.png';
import mPower from '../../images/sponsors/mpower.png';
import todoChevrolet from '../../images/sponsors/todo-chevrolet.png';
import turbosGT from '../../images/sponsors/turbos-gt.png';
import lmarello from '../../images/sponsors/lmarello.png';


export default class Sponsors extends Component {

    
  render(){
    return(
      <React.Fragment>
        <div className="__sponsors">
        <div className="__section-title">SPONSORS</div>
          <div className="w-100 container">
            <div className="row col-12 p-0 m-0">
                <div className="sponsor-name _alexander_ col-6 col-md-6 col-lg-3"><img src={institutoAlexanderImg} alt=""></img></div>
                <div className="sponsor-name _tino_ col-6 col-md-6 col-lg-3"><img src={tinoImg} alt=""></img></div>
                <div className="sponsor-name _mpower_ col-6 col-md-6 col-lg-3"><img src={mPower} alt=""></img></div>
                <div className="sponsor-name _punto_ col-6 col-md-6 col-lg-3"><img src={puntoMetal} alt=""></img></div>
            </div>
            <div className="row col-12 p-0 m-0">
                <div className="sponsor-name _turbos_ col-6 col-md-6 col-lg-3"><img src={turbosGT} alt=""></img></div>
                <div className="sponsor-name _mena_ col-6 col-md-6 col-lg-3"><img src={menaMora} alt=""></img></div>
                <div className="sponsor-name _chevrolet_ col-6 col-md-6 col-lg-3"><img src={todoChevrolet} alt=""></img></div>
                <div className="sponsor-name _lmarello_ col-6 col-md-6 col-lg-3"><img src={lmarello} alt=""></img></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
