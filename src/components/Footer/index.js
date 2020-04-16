import React from "react";
import "./footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <footer className="d-flex align-items-center justify-content-between __footer">
          <div>
            <p>
              ©Copyright <span>{new Date().getFullYear()}</span> SHECHE Motors |
              All Rights Reserved{" "}
              <span className="__LGM">
                <a target="_blank"  rel="noopener noreferrer" href="https://www.linkedin.com/in/leonel-marello-0ba4a262/">developed by lmarello</a>
              </span>
            </p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
