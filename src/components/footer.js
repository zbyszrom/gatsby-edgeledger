import React from'react'
import styled from "styled-components"

const Sfooter = styled.footer`
  background: #333;
  color: #fff;
  text-align:center;
  padding: 1.5rem 0;
`

const Footer = ()=>{
    return(
      <Sfooter>
        <div className="container">
        <p>Copyright &copy; 2020, EdgeLedger, All Rights Reserved</p>
        </div>
      </Sfooter>
    )
}
export default Footer