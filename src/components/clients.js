import React from'react'
import styled from 'styled-components'
import logo1 from '../images/logos/logo1.png'
import logo2 from '../images/logos/logo2.png'
import logo3 from '../images/logos/logo3.png'
import logo4 from '../images/logos/logo4.png'
import logo5 from '../images/logos/logo5.png'

const Simg = styled.img`
  display: block;
  margin: auto;
  width: 60%;
`


const Clients = ()=>{

    return(
        <section >
        <div className ='container'> 
        <h2><span>Our</span> Clients</h2>
        <div className ='items'>
       
        <div><Simg src={logo1} alt="Client"/></div>
        <div><Simg src={logo2} alt="Client"/></div>
        <div><Simg src={logo3} alt="Client"/></div>
        <div><Simg src={logo4} alt="Client"/></div>
        <div><Simg src={logo5} alt="Client"/></div>
      </div>
        </div>
        </section>
        
    )
}
export default Clients