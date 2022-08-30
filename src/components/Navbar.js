import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const navLinksStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        }
    }

    return(
        <nav>
            <NavLink style={navLinksStyles} to='/'>Homepage</NavLink>
            <NavLink style={navLinksStyles} to='about'>About page</NavLink>
        </nav>
    )
}

export default Navbar