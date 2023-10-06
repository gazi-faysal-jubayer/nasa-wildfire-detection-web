import React from "react";
import logo from "../assets/img/logo.png";
import nasa from "../assets/img/nasa.png";

const Resources = () => {
  return (
    <section id="resources" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Resources</h2>
          <div className="col-lg-4">
            <img src={nasa} className="img-nasa" alt="" />
          </div>
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content">
          <h3>Space Agency Data:</h3>
          <p className="fst-italic">
          <b> EONET API:</b>{" "}
            <a href="https://eonet.gsfc.nasa.gov/api/v3/events">
             https://eonet.gsfc.nasa.gov/api/v3/events
            </a>
            : To get real time and historical data for detecting wildfire
            hotspot{" "}
          </p>
          <h3>EARTH API: </h3>
          <p className="fst-italic">
          <b> Imagery:</b> {" "}
            <a href="https://api.nasa.gov/planetary/earth/assets">
            https://api.nasa.gov/planetary/earth/assets
            </a>
            : To get real time image for a location from satellite{" "}
          </p>
          <h4>GIBS: </h4>
          <p className="fst-italic">
          To get real time image for a location from satellite</p>
        </div>
        <div className="col-lg-4">
            <img src={logo} className="img-logo" alt="" />
          </div>
      </div>
    </section>
  );
};

export default Resources;
