import React from 'react'

import Navbar from './Navbar/Navbar.js'

import Slider from './Pages/Slider/Slider.js'
import Products from './Pages/Products/Products.js'
import Footer from './Footer/Footer.jsx'
export default function Home() {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Products/>
        <Footer/>
    </div>
  )
}
