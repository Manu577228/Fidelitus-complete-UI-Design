import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { IoSearchSharp } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";


function Navbar() {
    return <>

        <nav className="navbar">
            <div className="nav-container">
                <NavLink exact to="/" className="company-logo">
                  <div> <img src="./Images/3.JPG" /> </div>
        </NavLink>

        <ul className="nav-menu">

           <li className="navitem">
           <NavLink exact to="/">
                  <div className="search"> <input className="input-field" type="text" placeholder="search any team or members" /> 
                  
                  </div>
            </NavLink>
    </li> 

    <li className="navitem2">
           <NavLink exact to="/" className="search-bar">
                  <div className="search1"> <IoSearchSharp  /> </div>
                  
                 
            </NavLink>
    </li> 
      
      <li className = "navitem3">
      <NavLink exact to="/" className="search-icon">
      <div className="search-icon"><IoNotificationsSharp /> </div>

         </NavLink>
      </li>

</ul>
</div>
</nav>
</>;
}
export default Navbar

