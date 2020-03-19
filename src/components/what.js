import React from'react'
import {FaUniversity, FaBookReader, FaPencilAlt} from "react-icons/fa"
import styled from "styled-components"

const Container = styled.div`
  background: #f4f4f4;
  color: #333;
  padding: 1.5rem 0;
`
const Item = styled.div`
  flex: 1;
  text-align: center;
  padding: 1rem;
`

const What = ()=>{
    return(
      <section className='container'>
      <div> 
        <Container>
            <h2><span>What</span> We Do</h2>
            <div className = 'items'>
            <Item>
              <div className = 'i'><FaUniversity/></div>
            <h3>Investment Banking</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum!</p>
            </Item>
            
            
            <Item>
              <div className = 'i'><FaBookReader/></div>
              <h3>Portfolio Management</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum!</p>
            </Item>
            
          
            <Item>
              <div className = 'i'><FaPencilAlt/></div>
              <h3>Tax & Custodial</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum!</p>
            </Item>
            </div>
        </Container>
        </div>
      </section>
       
        
    )
}
export default What