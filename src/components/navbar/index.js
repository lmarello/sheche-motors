import React from "react";
import "./navbar.css";
import logo from "../../images/logo.png";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuActive: false
    };
  }

  componentDidMount() {
    const nav = document.getElementById("navbar");

    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 60) {
        nav.classList.add("bkg");
        return;
      }
      nav.classList.remove("bkg");
    });
    
    const list = document.getElementById('__navbar-list');
    const items = [...list.getElementsByClassName('__menu-item-anchor')];
      
    items.map( x => x.addEventListener("click", () => {
      this.setState({ menuActive : false});
    }));
  }

  handleMenuOnClick(menuIcon) {
    this.setState({ menuActive: menuIcon == "icon-menu" });
  }

  renderMenu() {
    const menuActive = this.state.menuActive ? "active" : "";
    const menuIcon = this.state.menuActive ? "icon-clear" : "icon-menu";

    return (
      <div>
        <ul id="__navbar-list" className={`__navbar-list ${menuActive}`}>
          <li className="__menu-item">
            <a className="__menu-item-anchor" href="#section-home">INICIO</a>
          </li>
          <li className="__menu-item">
            <a className="__menu-item-anchor" href="#section-about-as">SERVICIOS</a>
          </li>
          <li className="__menu-item">
            <a className="__menu-item-anchor" href="#section-gallery">GALERÍA</a>
          </li>
          <li className="__menu-item">
            <a className="__menu-item-anchor" href="#section-contact">CONTACTO</a>
          </li>
        </ul>

        <span
          className={`__icon ${menuIcon}`}
          onClick={this.handleMenuOnClick.bind(this, menuIcon)}
        ></span>
      </div>
    );
  }

  render() {
    
    const menuExpanded = this.state.menuActive ? "active" : "";

    return (
      <nav id="navbar" className={`navbar __navbar ${menuExpanded}`}>
        <div className="container">
          <div>
            <a href="#section-home">
              <img className="__navbar-logo" src={logo} alt="SHECHE Motors" />
              {/* <span className="tmp1">S</span><span className="tmp2">Motors</span> */}
            </a>
          </div>
          {this.renderMenu()}
        </div>
      </nav>
    );
  }
}

export default NavBar;
