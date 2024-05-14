import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { ScreenContext } from '../../../App';
import close from "../../Dynamic/Home/Assets/icons8-close-50.png"


const menu_items = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Let's Connect", href: "/contact" },

];

const Menu = ({ menu_items, screenWidth}) => {
  return (
    <>
      {menu_items.map((item, index) => (
       (screenWidth>730)?((index<3)?<NavLink key={index} className={({ isActive }) => isActive ? "menu-active" : "menu"} to={item.href}>
          {item.name}
        </NavLink>:null):<NavLink key={index} className={({ isActive }) => isActive ? "menu-active" : "menu"} to={item.href}>
          {item.name}
        </NavLink>
      ))}
    </>
  );
};

const Navbar = () => {
  const screenWidth = useContext(ScreenContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHambugerClicked = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle isMenuOpen state
  };

  return (
    <div className={`NavBar ${screenWidth <= 730 ? "NavBar-mobile" : ""}`}>

      {/* Logo Part */}
      <NavLink to="/" className="logo">

        GOURAV BHADRA
        <br />
        <div className='logo-underline'></div>

      </NavLink>

   
      {(screenWidth <= 730) ?
        <>
          {(!isMenuOpen)?<img
          className='menu-btn'
            width="30"
            height="30"
            onClick={handleHambugerClicked}
            src="https://img.icons8.com/ios-filled/50/xbox-menu.png"
            alt="xbox-menu" />
            :
            <img
          className='menu-btn'
            width="30"
            height="30"
            onClick={handleHambugerClicked}
            src={close}
            alt="xbox-menu" />
            }
          
            
            <div className={`menu-card ${isMenuOpen ? "menu-card-open" : ""}`}>
  <Menu menu_items={menu_items} />
  
</div>

        </>
        :
        <div className="menus">
          <Menu menu_items={menu_items} screenWidth={screenWidth} />
          <NavLink className="contact-btn" to="/contact">
            Let's Connect
          </NavLink>
        </div>
      }
    </div>
  );
};

export default Navbar;

