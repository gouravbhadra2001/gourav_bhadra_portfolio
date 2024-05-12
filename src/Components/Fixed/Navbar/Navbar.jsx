import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

//This navbar is fixed throughout the app

const Navbar = () => {
  return (
    <div className='NavBar'>


    {/*Logo Part*/}
      <NavLink to="/" className="logo">
GOURAV BHADRA
      </NavLink>

    {/*Menus Part*/}
      <div className="menus">
        <NavLink className="menu" to='/'>Home </NavLink>
        <NavLink className="menu" to='/about'>About</NavLink>
        <NavLink className="menu" to='/projects'>Projects</NavLink>
        <NavLink className="menu" to='/experience' aria-disabled>Experience</NavLink>
        <NavLink className="menu" to='/testimonials' aria-disabled>Testimonials</NavLink>
      </div>

        {/*Contact btn part*/} 
      <NavLink className="contact-btn" to="/contact">
        Let's Connect
      </NavLink>
    </div>
  )
}

export default Navbar
