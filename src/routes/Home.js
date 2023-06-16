import React from 'react'
import Navbar from '../componets/Navbar'
import Heroimg from '../componets/Heroimg'
import Footer from '../componets/Footer'
import Work from '../componets/Work'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg />
      <Work />
      <Footer />
    </div>
  )
}

export default Home