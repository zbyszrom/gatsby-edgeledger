import React from 'react'
import Layout from '../components/layout'

const Contact = ()=>{
    return(
        <Layout>
            <div>
                <h2>Contact Us</h2>
                <p>Please use the form below to contact us</p>
                <form>
                <div >
                <label for="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Enter Name"/>
                </div>
                <div >
                <label for="email">Email</label>
                <input type="email" name="email"  placeholder="Enter Email"/>
                </div>
                <div >
                <label for="phonne">Phone Number</label>
                <input type="text" name="phone" placeholder="Enter Phone Number"/>
                </div>
                <div >
                <label for="message">Message</label>
                <textarea name="message" placeholder="Enter Message"></textarea>
                </div>
                <input type="submit" value="Send" ></input>
                </form>
            </div>
        </Layout>
            
    )
    }

export default Contact