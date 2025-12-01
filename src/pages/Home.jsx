import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About_product from '../components/Cards/About_product'

function Home() {
  return (
    <>
    <Navbar/>
    <About_product
    
        title="About our product"
        desc="It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout the
              point of using"
        src="https://qx-honee.myshopify.com/cdn/shop/files/about-us.jpg"/>
    <Footer/>
    </>
  )
}

export default Home