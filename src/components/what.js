import React from'react'
import {FaUniversity, FaBookReader, FaPencilAlt} from "react-icons/fa"

const What = ()=>{
    return(
        <section>
             <div>
            <h2>What We Do</h2>
            <div>
            <div>
              <FaUniversity/>
            <h3>Investment Banking</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum!</p>
          </div>
            </div>
            <div>
            <div>
              <FaBookReader/>
              <h3>Portfolio Management</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum!</p>
            </div>
            </div>
            <div>
            <div>
              <FaPencilAlt/>
              <h3>Tax & Custodial</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum!</p>
            </div>
            </div>
        </div>
        </section>
       
        
    )
}
export default What