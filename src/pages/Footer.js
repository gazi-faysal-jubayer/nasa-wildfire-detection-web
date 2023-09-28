import React from "react";
import '../assets/css/footer.css';
import { Icon } from '@iconify/react';


const Footer = () => {
    return (
        <footer class="footer">
            <div class="waves">
                <div class="wave" id="wave1"></div>
                <div class="wave" id="wave2"></div>
                <div class="wave" id="wave3"></div>
                <div class="wave" id="wave4"></div>
            </div>
            <div class="col-md-6 item text">
                <h3>Team Mohakorsho</h3>
                <p>Team Mohakorsho is a dedicated and visionary group of individuals united by a common purpose: to address the pressing issue of wildfires through advanced technology and artificial intelligence. Our team has embarked on a pivotal project aimed at revolutionizing wildfire detection and management.</p>
            </div>

            <ul class="social-icon">
                <li class="social-icon__item"><a class="social-icon__link" href="#">
                <Icon icon="fa-brands:linkedin" />
                </a></li>
                <li class="social-icon__item"><a class="social-icon__link" href="#">
                <Icon icon="fa6-brands:twitter" />
                </a></li>
                <li class="social-icon__item"><a class="social-icon__link" href="#">
                <Icon icon="entypo-social:facebook" />
                </a></li>
                <li class="social-icon__item"><a class="social-icon__link" href="#">
                <Icon icon="ion:logo-instagram" />
                </a></li>
            </ul>
            <p>&copy;2023 Team Mohakorsho | All Rights Reserved</p>
        </footer>
    )
}
export default Footer