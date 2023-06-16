import React from 'react'
import Navbar from '../componets/Navbar'
import Footer from '../componets/Footer'
import Heroimg2 from '../componets/Heroimg2'
import Pricingcart from '../componets/Pricingcart'
import Work from '../componets/Work'



const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS." text="Some of my most 
      recent works"/>
      <Work />
      <Pricingcart />
      <Footer />
      
    </div>
  )
}

export default Project