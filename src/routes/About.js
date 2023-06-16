import React from 'react'
import Navbar from '../componets/Navbar'
import Footer from '../componets/Footer'
import Heroimg2 from '../componets/Heroimg2'
import Aboutcontent from '../componets/Aboutcontent'

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2  heading="ABOUT" 
      text="i am a friendly front end developer"/>
      <Aboutcontent />
      <Footer />
    </div>
  )
}

export default About