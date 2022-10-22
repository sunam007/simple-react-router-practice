import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className='navbar'>
            <NavLink className={"navitems"} to="/home">Home</NavLink>
            <NavLink className={"navitems"} to="/Meals">Meals</NavLink>
            <NavLink className={"navitems"} to="/about">About</NavLink>
            <NavLink className={"navitems"} to="/contact">Contact</NavLink>
            
        </div>
    );
};

export default Header;