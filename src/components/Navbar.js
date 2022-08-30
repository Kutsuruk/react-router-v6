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
        <nav className='primary-nav'>
            <NavLink style={navLinksStyles} to='/'>Homepage</NavLink>
            <NavLink style={navLinksStyles} to='about'>About page</NavLink>
            <NavLink style={navLinksStyles} to='products'>Products</NavLink>
        </nav>
    )
}

export default Navbar