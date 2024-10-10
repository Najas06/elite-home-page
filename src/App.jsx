import React from 'react'
import Hero from './sections/Hero'
import HeroAbout from './sections/HeroAbout'
import Property from './sections/Property'
import Footer from './sections/Footer'
import Contact from './sections/Contact'
import Community from './sections/Community'
import Amenties from './sections/Amenties'
import Gallery from './sections/Gallery'
import Customer from './sections/Customer'
function App() {
  return (
   <>
   <main className='max-w-[1920px] mx-auto border-2 border-red-600'>
    <Hero/>
    <HeroAbout/>
    <Property/>
    <Community/>
    <Contact/>
    <Amenties/>
    <Gallery/>
    <Customer/>
    <Footer/>
   </main>
   </>
  )
}

export default App
