import React, { useState } from 'react'
import './Navside.css';
import * as FaIcons from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData'
import { IconContext } from 'react-icons'




function Navside() {
    const [sidebar, setSidebar] = useState(true)

    const showSidebar = () => setSidebar(!sidebar)


    return (
        <>

            <IconContext.Provider value={{ color: 'blue' }}>
                <div className="navside" >
                    <div className="company-logo"> <img src="./Images/3.JPG" /> </div>
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />

                    </Link>
                    <div className="search"> <input className="input-field" type="text" placeholder="search any team or members" /></div>
                    <div className="search1"> <IoSearchSharp fontSize="35px"/> </div>
                    <div className="notification"><IoNotificationsSharp fontSize="35px" /></div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        {/* <li className="navside-toggle">
                            <Link to="#" className='menu-bars'>
                            </Link>
                        </li> */}
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>

                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navside
