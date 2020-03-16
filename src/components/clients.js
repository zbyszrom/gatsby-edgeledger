import React from'react'

import logo1 from '../images/logos/logo1.png'
import logo2 from '../images/logos/logo2.png'
import logo3 from '../images/logos/logo3.png'
import logo4 from '../images/logos/logo4.png'
import logo5 from '../images/logos/logo5.png'


const Clients = ()=>{

  

    return(
        <section>
        <div> 
        <h2>Our Clients</h2>
        <div>
       
        <div><img src={logo1} alt="Client"/></div>
        <div><img src={logo2} alt="Client"/></div>
        <div><img src={logo3} alt="Client"/></div>
        <div><img src={logo4} alt="Client"/></div>
        <div><img src={logo5} alt="Client"/></div>
      </div>
        </div>
        </section>
        
    )
}
export default Clients