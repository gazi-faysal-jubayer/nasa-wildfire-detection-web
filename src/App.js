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
import Header from './pages/Header';
import Hero from './pages/Hero';
import About from './pages/About';
import Solution from './pages/Solution';
import Map from './pages/Map';
import Loader from './pages/Loader';
import Footer from './pages/Footer';


function App() {

  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
    }

    fetchEvents()
  }, [])
  
  useEffect(
    () => {
      AOS.init()
    },[]
  )


  return (
    <div className="App">
      <Header/>
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

export default App;
