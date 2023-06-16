import React from 'react'
import Navbar from '../componets/Navbar'
import Footer from '../componets/Footer'
import Heroimg2 from '../componets/Heroimg2'
import Form from '../componets/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="CONTACT" 
      text="Lets have a chat"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact