import React from 'react'
import HeroSection from '../components/HeroSection';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Availability from '../components/Availability';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import Rooms from '../components/Room';
import Features from '../components/Features';


const Home = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <HeroSection />
        <Availability />
        <AboutSection/>
        <Rooms/>
        <Features/>
        <Footer />
    </div>
  )
}

export default Home