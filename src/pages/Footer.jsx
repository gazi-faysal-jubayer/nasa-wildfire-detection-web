import React from "react";
import '../assets/css/footer.css';
import { Icon } from '@iconify/react';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
            <div className="col-md-6 item text">
                <h3>Team Mohakorsho</h3>
                <p>Team Mohakorsho is a dedicated and visionary group of individuals united by a common purpose: to address the pressing issue of wildfires through advanced technology and artificial intelligence. Our team has embarked on a pivotal project aimed at revolutionizing wildfire detection and management.</p>
            </div>

            <ul className="social-icon">
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                <Icon icon="fa-brands:linkedin" />
                </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                <Icon icon="fa6-brands:twitter" />
                </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                <Icon icon="entypo-social:facebook" />
                </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                <Icon icon="ion:logo-instagram" />
                </a></li>
            </ul>
            <p>&copy;2023 Team Mohakorsho | All Rights Reserved</p>
        </footer>
    )
}
export default Footer