import React, { useState } from 'react'
import HomeSection from '../sections/HomeSection'
import AboutSection from '../sections/AboutSection'
import Projects from '../sections/Projects'
import Blogs from '../sections/Blogs'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

const Sections = () => {
  

  return (
    <>
        <HomeSection/>
        <AboutSection/>
        <Projects/>
        <Blogs/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Sections