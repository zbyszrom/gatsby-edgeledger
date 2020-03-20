import React from'react'
import {FaUniversity, FaBookReader, FaPencilAlt} from "react-icons/fa"
import styled from "styled-components"

const Section = styled.section`
  background: #f4f4f4;
  color: #333;
  padding: 1.5rem 0;
`
const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 0 2rem;
  overflow: hidden;
`
const Item = styled.div`
  display: flex;
  flex: 1;
  text-align: center;
  padding: 1rem;
`

const What = ()=>{
    return(
      <Section>
      <Container> 
      
            <h2><span>What</span> We Do</h2>
            <div className = 'items'>
            <Item>
            <div className = 'i'>
              <FaUniversity />
            </div>
            <div>
            <h3>Investment Banking</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum!</p>
            </div>
            </Item>
            
            
            <Item>
              <div className = 'i'><FaBookReader/></div>
              <div>
              <h3>Portfolio Management</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum!</p>
              </div>
            </Item>
            
          
            <Item>
              <div className = 'i'><FaPencilAlt/></div>
              <div>
              <h3>Tax & Custodial</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum!</p>
              </div>
            </Item>
            </div>
        
        </Container>
      </Section>
       
        
    )
}
export default What