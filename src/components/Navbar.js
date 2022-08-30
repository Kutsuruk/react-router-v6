import React from "react";
import {NavLink} from "react-router-dom";
import {useAuth} from "./auth";

const Navbar = () => {
    const navLinksStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        }
    }

    const auth = useAuth()

    return(
        <nav className='primary-nav'>
            <NavLink style={navLinksStyles} to='/'>Homepage</NavLink>
            <NavLink style={navLinksStyles} to='about'>About page</NavLink>
            <NavLink style={navLinksStyles} to='products'>Products</NavLink>
            <NavLink style={navLinksStyles} to='profile'>Profile</NavLink>
            {
                !auth.user && <NavLink style={navLinksStyles} to='login'>Login</NavLink>
            }
        </nav>
    )
}

export default Navbar