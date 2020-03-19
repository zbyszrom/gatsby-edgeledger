import React from'react'
import {FaUniversity, FaBookReader, FaPencilAlt} from "react-icons/fa"
import styled from "styled-components"

const Container = styled.div`
  background: #f4f4f4;
  color: #333;
  padding: 1.5rem 0;
`

const What = ()=>{
    return(
      <section className='container'>
        <Container>
            <h2><span>What</span> We Do</h2>
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
        </Container>
      </section>
       
        
    )
}
export default What