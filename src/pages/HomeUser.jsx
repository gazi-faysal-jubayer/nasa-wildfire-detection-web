import '../App.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../assets/css/style.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from './Hero';
import About from './About';
import Solution from './Solution';
import Map from './Map';
import Loader from './Loader';
import Footer from './Footer';
import HeaderUser from "./HeaderUser";


function HomeUser() {

  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const { events } = await res.json();
        setEventData(events);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);
  
  useEffect(
    () => {
      AOS.init()
    },[]
  )


  return (
    <div className="App">
      <HeaderUser/>
      <Hero/>
      <main id="main">
        <About/>
        <Solution/>
      { !loading ? <Map eventData={eventData} /> : <Loader /> }
      </main>
      <Footer/>
    </div>
  );
}

export default HomeUser;
