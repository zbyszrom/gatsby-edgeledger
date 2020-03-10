
import React from "react"

//import scrollTo from 'gatsby-plugin-smoothscroll'
//import { useStaticQuery, graphql } from "gatsby"
import "../styles/layout.css"
import Navbar from './navbar'
import Footer from'./footer'

 if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
} 

const Layout = ({ children }) => {
    
  return (
    <>
      
      <Navbar/>
   <main>{children}</main>   
      <Footer/>
      
    </>
  )
}



export default Layout
