import React, {useEffect} from 'react'
import {AnimatePresence} from 'framer-motion'
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Routes from "../routes/Routers";
// import "..App.css"
import Area from "../pages/Area"

const Layout = () => {


  return (
    <AnimatePresence>
    <div>
      <Area/>
        <Header />

        <div>
        <Routes />
        </div>

        
      <Footer />
    </div>
    </AnimatePresence>
  )
}

export default Layout