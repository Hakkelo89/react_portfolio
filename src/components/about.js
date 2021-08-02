import React from "react";
import Avatar from "../assets/img/avatar.png";
import SakaryaLogo from "../assets/img/sakarya.png";
import BirminghamLogo from "../assets/img/uniofbirmingham.png";
import "../App.css";

const About = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="row abstract-back ">
                  <img className="avatar" src={Avatar} />
                </div>
              </div>

              <div className="card-body">
                <div className="row">
                  <p className="p-about">
                    Geophysical Engineer with a demonstrated history of working
                    on construction projects. Deep understanding and technical
                    expertise in Computer Science fundamentals, Javascript,
                    ReactJS, Redux, NodeJS, MongoDB CSS, HTML and other frontend
                    technologies.
                  </p>
                </div>
              </div>

              <div className="modal-footer" />

              <div className="card-body">
                <h2 className="edu">Education</h2>
                <br />

                <div className="grid-container-profile">
                  <div className="grid-item">
                    <div className="title-uni">University Of Birmingham</div>
                    <div className="title-concentration">
                      Fullstack Developer Coding Bootcamp
                    </div>
                  </div>

                  <div className="grid-item">
                    <img className="university-logo" src={BirminghamLogo} />
                  </div>

                  <div className="grid-item">
                    <div className="title-uni">Sakarya University</div>
                    <div className="title-concentration">
                      Bachelor of Geophysical Engineering
                    </div>
                  </div>

                  <div className="grid-item">
                    <img className="university-logo" src={SakaryaLogo} />
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

export default About;
