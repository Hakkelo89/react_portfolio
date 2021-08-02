import React from "react";
import Logo from "../assets/img/logo.png";
import JqueryLogo from "../assets/img/jquery-logo.png";
import BootstrapLogo from "../assets/img/bootstrap-logo.png";
import MernLogo from "../assets/img/mern-logo.png";
import "../App.css";
import "../portfolio.css";

const Resume = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="code">Computer Science Fundamentals</div>
                </div>
                <div className="grid-container-skills">
                  <div className="grid-item-skills">
                    <p className="p-about">Data Structures</p>
                  </div>

                  <div className="grid-item-skills">
                    <p className="p-about">Algorithm</p>
                  </div>

                  <div className="grid-item-skills">
                    <p className="p-about">Design Patterns</p>
                  </div>
                </div>
              </div>

              <div className="modal-footer" />

              <div className="card-body">
                <div className="row">
                  <div className="code">Web Technologies</div>
                </div>

                <div className="grid-container-skills">
                  <div className="grid-item-skills">
                    <img src={Logo} className="img-skills" />
                  </div>

                  <div className="grid-item-skills">
                    <img src={MernLogo} className="img-skills" />
                  </div>

                  <div className="grid-item-skills">
                    <img src={JqueryLogo} className="img-skills" />
                  </div>

                  <div className="grid-item-skills">
                    <img src={BootstrapLogo} className="img-skills" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Resume;
