

import React from 'react'
import Dishes from './components/Dishes'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import About from './components/About'
import Mission from './components/Mission'
import Expertise from './components/Expertise'
import Review from './components/Review'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'


function App() {
  return (
   <main className='overflow-y-hidden antialiased bg-black text-netural-200'>
     <Navbar/>
    <HeroSection/>
     <Dishes/>
     <About/>
     <Mission/>
     <Expertise/>
     <Review/>
     <ContactSection/>
     <Footer/>
   </main>
  )
}

export default App