import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import Layout from '../components/layout'

const getMap = graphql `
query StaticMapQuery {
    Map: staticMap {
        childFile {
          childImageSharp {
            fixed(width:550) {
                ...GatsbyImageSharpFixed
            }
          }
        }
      }
}
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #93cb52;
  color: #fff;
  padding: 2rem;
  flex: 1;
`
const Group = styled.div`
margin: 0.75rem;

`


const Contact = ()=>{
    const data = useStaticQuery(getMap)
    return(
        <Layout>
          <section className ='high'>
            
            <Container>
                <h2>Contact Us</h2>
                <p>Please use the form below to contact us</p>
                <form>
                <Group>
                <label for="name">Name</label><br/>
                <input type="text" name="name" id="name" placeholder="Enter Name"/>
                </Group>
                <Group >
                <label for="email">Email</label><br/>
                <input type="email" name="email"  placeholder="Enter Email"/>
                </Group>
                <Group>
                <label for="phonne">Phone Number</label><br/>
                <input type="text" name="phone" placeholder="Enter Phone Number"/>
                </Group>
                <Group>
                <label for="message">Message</label><br/>
                <textarea name="message" placeholder="Enter Message"></textarea>
                </Group>
                <div className ='sub'>
                <input type="submit" value="Send" className = 'submit'></input>
                </div>
                </form>
            </Container>
            
            <div className ='img'>
            
                <Img fixed = {data.Map.childFile.childImageSharp.fixed}/>
            </div>
            
            </section>
        </Layout>
            
    )
    }

export default Contact