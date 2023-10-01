import './App.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/style.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";



import Hero from './pages/Hero';
import About from './pages/About';
import Solution from './pages/Solution';
import Map from './pages/Map';
import Loader from './pages/Loader';
import Footer from './pages/Footer';
import Home from "./pages/Home";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Header from './pages/Header';
import HomeUser from './pages/HomeUser';


function App() {

  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

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
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomeUser name={userName} />} />
          <Route path="/" element={<Home/>} />
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;
