import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"



const menu_items = [
  {name: "Home", href :"/"},
  {name: "About Me", href: "/about"},
  {name: "Projects", href: "/projects"}
];

const Navbar = () => {
  return (
    <div className='NavBar'>

      {/*Logo Part*/}
      <NavLink to="/" className="logo">
        GOURAV BHADRA
      </NavLink>

      {/*Menus Part*/}
      <div className="menus">
        {menu_items.map((item, index) => (
          <NavLink key={index} className={({isActive})=>isActive?"menu-active":"menu"} to={item.href}>
            {item.name}
          </NavLink>
        ))}
        <NavLink className="contact-btn" to="/contact">
        Let's Connect
      </NavLink>
      </div>

      {/*Contact btn part*/}
      
    </div>
  )
}

export default Navbar
