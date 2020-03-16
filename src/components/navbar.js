import React from 'react'
import {Link} from 'gatsby'
import {FaBookOpen} from "react-icons/fa"

const Navbar = ()=>{
    return(
        <nav>
            <h1>
                <FaBookOpen/>Edge Ledger
            </h1>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/whot-who">What We Do</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
            </ul>
        
        
        </nav>
    )
}
export default Navbar