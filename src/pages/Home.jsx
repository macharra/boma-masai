import React from 'react'
import HeroSection from '../components/HeroSection';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
//import Availability from '../components/Availability';
import Footer from '../components/Footer';
//import AboutSection from '../components/AboutSection';
import Rooms from '../components/RestaurantsSection';
//import Features from '../components/Features';
import BomaServices from '../components/BomaServices';
import BomaGallery from '../components/BomaGallery';
import BomaInfo from '../components/BomaInfo';
import PromoSection from '../components/PromoSection';
import VillainSection from '../components/VillainSection'

const Home = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <HeroSection />
        <PromoSection/>
        <BomaGallery/>
        <BomaServices/>
        <Rooms/>
        <BomaInfo/>
        <VillainSection/>
        <Footer />
    </div>
  )
}

export default Home