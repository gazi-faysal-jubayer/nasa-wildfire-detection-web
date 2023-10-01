import React, { useState } from "react";
import ChatBox from './ChatBox';
import { handleLogout } from './Logout'; // make sure this import path is correct
import '../assets/css/ChatBox.css';
import { Link } from "react-router-dom";

const HeaderUser = () => {

  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatButtonClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
      <header id="header" className="d-flex flex-column justify-content-center my-edit-navbar">

        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li><Link to="/login"><a className="nav-link scrollto active" onClick={handleLogout}><i className="bx bx-home"></i> <span>Log Out</span></a></Link></li>
            <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>About
              Wildfire</span></a></li>
            <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-donate-heart"></i> <span>Our Solution</span></a>
            </li>
            <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-map"></i> <span>Map</span></a></li>
            <li><a className="nav-link scrollto" onClick={handleChatButtonClick}><i className="bx bx-message"></i><span>Message</span></a></li>
            {isChatOpen && <ChatBox onClose={() => setIsChatOpen(false)} />}
            <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
          </ul>
        </nav>

      </header>
    </>
  )
}
export default HeaderUser