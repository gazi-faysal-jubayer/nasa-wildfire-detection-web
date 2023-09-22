import React from "react";


const Header = () => {
    return (
        <>
        <i class="bi bi-list mobile-nav-toggle d-lg-none"></i>
        <header id="header" className="d-flex flex-column justify-content-center">
      
          <nav id="navbar" className="navbar nav-menu">
            <ul>
              <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
              <li><a href="#about" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>About
                    Wildfire</span></a></li>
              <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-donate-heart"></i> <span>Our Solution</span></a>
              </li>
              <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-map"></i> <span>Map</span></a></li>
              <li><a href="#services" className="nav-link scrollto"><i className="bx bx-message"></i> <span>Message</span></a></li>
              <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
            </ul>
          </nav>
      
        </header>
        </>
    )
}
export default Header