import React from'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components' 

const getPeople = graphql `
query {
  Who: file(name: {eq: "people"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
}
`
const Container = styled.div`
  background: #333;
  color: #fff;
  padding: 2rem;
`
const Who = ()=>{
    const data = useStaticQuery(getPeople)
    return(
        <div>
         <div>
          <Img 
            fluid = {data.Who.childImageSharp.fluid} className = ''/>
          </div>
      <section >
      <Container>
            <h2><span>Who </span>We Are</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora culpa harum voluptas ratione enim consequuntur illo, atque, aut doloribus unde repellendus sit delectus beatae aspernatur placeat corrupti. Ipsa, itaque quas.</p>
      <h3>Our Team</h3>
      <ul>
        <li>Mark Smith: CEO</li>
        <li>Shannon Johnson: CFO</li>
        <li>John Corbit: Lead Accountant</li>
        <li>Janet Williams: Investment Manager</li>
        <li>Kara Jackson: Senior Accountant</li>
      </ul>
     </Container>
      </section>
        </div>
    )
}
export default Who