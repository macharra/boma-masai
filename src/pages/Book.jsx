import React from 'react'
import BookingForm from '../components/BookingForm'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'


const Book = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <HeroSection/>
    <div>
      <BookingForm/>
    </div>
    <Footer/>
    </>
    
  )
}

export default Book