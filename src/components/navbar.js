import React from 'react'
import {Link} from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll'

//import Clients from './clients'
//import Showcase from './showcase'
const Navbar = ()=>{
    return(
        <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/page-2">What We Do</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
            </ul>
        
        
        </nav>
    )
}
export default Navbar