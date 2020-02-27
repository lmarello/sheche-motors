import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="d-flex align-items-center justify-content-center __footer">
          <div>
            <p>
              ©Copyright <span>{new Date().getFullYear()}</span> SHECHE Motors |
              All Rights Reserved{" "}
              <span className="__LGM">
                <a target="_blank" href="https://www.linkedin.com/in/leonel-marello-0ba4a262/">developed by lmarello</a>
              </span>
            </p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
