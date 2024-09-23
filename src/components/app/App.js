import { useState, useEffect } from 'react';

import Header from '../header/Header';
import Hero from '../hero/Hero';
import AboutUs from '../aboutUs/AboutUs';
import Flats from '../flats/Flats';
import Chill from '../Chill/Chill';
import Gallery from '../gallery/Gallery';
import VideoPlayer from '../videoplayer/VideoPlayer';
import RetreatDescription from '../retreatDescription/RetreatDescription';
import Reviews from '../reviews/Reviews';
import Map from '../map/Map';
import Contacts from '../contacts/Contacts';
import Footer from '../footer/Footer';

import './App.scss';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) { // Показываем кнопку после 300px прокрутки
        setShowScrollButton(true);
    } else {
        setShowScrollButton(false);
    }
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <div className="App">
      {showScrollButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
            Наверх
        </button>
      )}
      <Header/>
      <Hero/>
      <AboutUs/>
      <Flats/>
      <Chill/>
      <Gallery/>
      <VideoPlayer/>
      <RetreatDescription/>
      <Reviews/>
      <Map/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
