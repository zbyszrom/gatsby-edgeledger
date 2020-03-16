
import React from "react"

//import scrollTo from 'gatsby-plugin-smoothscroll'
//import { useStaticQuery, graphql } from "gatsby"
import "../styles/layout.css"
import Navbar from './navbar'
import Footer from'./footer'

 

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
