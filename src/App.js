import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import BuySell from './components/BuySell'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <BuySell />
      <Blogs />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App