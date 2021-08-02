import React from "react";
import PasswordGenerator from "../assets/img/password-generator.png";
import TravelApp from "../assets/img/travelapp.png";
import DayPlanner from "../assets/img/dayplanner.png";
import FitnessTracker from "../assets/img/FitnessTrackerDashboard.png";
import WeatherApp from "../assets/img/weatherapp.png";
import P1xel from "../assets/img/p1xelapp.png";
import "../App.css";
import "../components/portfolio";

const Portfolio = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="header">
                  <h3>Portfolio</h3>
                </div>
                <div className="modal-footer" />

                <div className="grid-container vertical-line">
                  <div className="grid-item gallery__item--1">
                    <a
                      href="https://hakkelo89.github.io/Day-Planner//"
                      target="_blank"
                    >
                      <img
                        src={DayPlanner}
                        alt="Task Tracker App"
                        className="gallery__img"
                      />
                      <div className="desc">
                        <h5>Task Tracker</h5>
                        <p>Local Host</p>
                      </div>
                    </a>
                  </div>

                  <div className="grid-item gallery__item--2">
                    <a
                      href="https://hakkelo89.github.io/Weather-Dashboard/"
                      target="_blank"
                    >
                      <img
                        src={WeatherApp}
                        alt="Weather App"
                        className="gallery__img"
                      />
                      <div className="desc">
                        <h5>Weather App</h5>
                        <p>Local Storage</p>
                      </div>
                    </a>
                  </div>

                  <div className="grid-item gallery__item--3">
                    <a
                      href="https://natasha-mann.github.io/travel-app/"
                      target="_blank"
                    >
                      <img
                        src={TravelApp}
                        alt="Travel App"
                        className="gallery__img"
                      />
                      <div className="desc">
                        <h5>Travel App</h5>
                        <p>Html CSS JavaScript JQuery</p>
                      </div>
                    </a>
                  </div>

                  <div className="grid-item gallery__item--4">
                    <a
                      href="https://powerful-lake-63027.herokuapp.com/?id=60f2a3bae87aeb00205a0d1b"
                      target="_blank"
                    >
                      <img
                        src={FitnessTracker}
                        alt="Fitness Tracker"
                        className="gallery__img"
                      />
                      <div className="desc">
                        <h5>Fitness Tracker</h5>
                        <p>MERN</p>
                      </div>
                    </a>
                  </div>

                  <div className="grid-item gallery__item--5">
                    <a
                      href="https://hakkelo89.github.io/password-generator/"
                      target="_blank"
                    >
                      <img
                        src={PasswordGenerator}
                        alt="Password Generator"
                        className="gallery__img"
                      />
                      <div className="desc">
                        <h5>PasswordGenerator</h5>
                        <p>Local Storage</p>
                      </div>
                    </a>
                  </div>

                  <div className="grid-item gallery__item--6">
                    <a
                      href="https://fast-shelf-77951.herokuapp.com/"
                      target="_blank"
                    >
                      <img src={P1xel} alt="P1xel" className="gallery__img" />
                      <div className="desc">
                        <h5>P1xel</h5>
                        <p>Api MVC Express Axios MySQL Sequelize </p>
                      </div>
                    </a>
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

export default Portfolio;
