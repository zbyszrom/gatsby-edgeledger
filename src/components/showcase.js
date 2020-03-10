import React from'react'
import {Link} from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

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

const Showcase = ()=>{
    const data = useStaticQuery(getImage)
    return(
        <BackgroundImage 
            fluid = {data.Bcg.childImageSharp.fluid} className = 'heroImg'>
            <div>
                <h1>The Sky Is The Limit</h1>
                <p >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatibus debitis praesentium inventore, eum deserunt.
                </p>
                <Link to = "/page-2">Read More</Link>
            </div>
            </BackgroundImage>
        
        
        
    )
}
export default Showcase