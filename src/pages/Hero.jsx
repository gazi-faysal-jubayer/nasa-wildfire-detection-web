import React from "react";
import Typed from "typed.js";
import "../assets/css/button.scss";
import { Link } from "react-router-dom";


const Hero = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "NASA API",
        "Native Information",
        "Machine Learning",
        "Robotics",
      ],
      typeSpeed: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>Team Mohakorsho</h1>
        <p>We will alert people from Wildfire through</p>
        <p>
          <span className="typed" ref={el}></span>
        </p>
        <div className="social-links">
          <a href="#" className="twitter">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#" className="google-plus">
            <i className="bx bxl-skype"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        {/* button */}
        <div className="wrapper">
            <div className="link_wrapper">
              <a href="/signup">Join Us</a>
              <a href="/login">Log In</a>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 268.832 268.832"
                >
                  <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                </svg>
              </div>
            </div>
          </div>
        <div>
          
        </div>
      </div>
    </section>
  );
};
export default Hero;
