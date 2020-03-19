import React from'react'
import {Link} from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import styled from "styled-components"

const getImage = graphql`
query {
    Bcg: file(name: {eq: "showcase"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
}
`
const H1 = styled.h1`
font-size: 4rem;
margin-bottom: 0.75rem;
line-height: 1.1;
color: white;
`
const P = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: greenyellow;
`
const Content = styled.div` 
  text-align: center;
`
const SLink = styled(Link)`
   display: inline-block;
    color: #fff;
    background: #93cb52;
    padding: 0.5rem 2rem;
    border: none;
    border-radius: 5px;
    &:hover {
      background: #7ab436;
    }

`

const Showcase = ()=>{
    const data = useStaticQuery(getImage)
    const backgroundFluid = data.Bcg
    const backgroundFluidImageStack = [backgroundFluid.childImageSharp.fluid, 'linear-gradient(rgba(32, 32, 32, 0.60), rgba(128, 128, 128, 0.20))'].reverse()
    return (
        <BackgroundImage 
            fluid = {backgroundFluidImageStack} className = 'heroImg'>
            <Content>
                <H1>The Sky Is The Limit</H1>
                <P >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatibus debitis praesentium inventore, eum deserunt.
                </P>
                <SLink to = "/page-2" >Read More</SLink>
            </Content>
            </BackgroundImage>        
        
    )
}
export default Showcase