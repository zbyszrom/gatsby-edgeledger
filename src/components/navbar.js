import React from 'react'
import {Link} from 'gatsby'
import {FaBookOpen} from "react-icons/fa"
import styled from "styled-components"


const Nav = styled.nav`
  display: flex;
  position: sticky;
  top:0;
  background: #333;
  color: #fff;
  justify-content: space-between;
  z-index: 1;
  padding: 1rem;
  `
const Span= styled.span`
  color: greenyellow;
`
const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none; 
`
const SLink = styled(Link)`
  color: white;   
  padding: 0.75rem;
  margin: 0 0.25rem;
&:hover{
  background: #93cb52;
  border-radius: 5px; 
} 
`

const Navbar = ()=>{
    return(
        <Nav>
            <h1>
            <Span><FaBookOpen/>Edge</Span> Ledger
            </h1>
            <Ul>
                <li>
                <SLink to="/">Home</SLink>
                </li>
                <li>
                <SLink to="/whot-who">What We Do</SLink>
                </li>
                <li>
                <SLink to="/contact">Contact</SLink>
                </li>
            </Ul>
        
        
        </Nav>
    )
}
export default Navbar