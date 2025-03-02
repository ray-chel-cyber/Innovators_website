import React from "react"
import Hero from "../components/Hero"
import About from "../components/About"
import AboutProduct from "../components/Innovator"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Contact from "../components/Contact"
import Testimonials from "../components/Testimonials"
import Innovator from "../components/Innovator"
import EmoticonSection from "../components/EmoticonSection"
import InstructionsSection from "../components/InstructionsSection"


const LandingPage = () => {
    return (
      <div>
           <div className='bg-white'>
          
        <Navbar/>
        <Hero/>
        <About/>
        <EmoticonSection/>
        <Innovator/>
        <Products/>
        <InstructionsSection/>
        <Testimonials/>
        <Contact/>
        <Footer/>
        
        
        
            </div>
         
        
        </div>
    )
  }
  
  export default LandingPage
    