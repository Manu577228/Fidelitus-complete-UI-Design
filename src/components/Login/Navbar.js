import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import * as IoIcon from 'react-icons/io'
import * as BsIcon from 'react-icons/bs'
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import * as RiIcon from 'react-icons/ri'
import * as TiIcon from 'react-icons/ti'
import * as MdIcon from 'react-icons/md'
import * as VscIcon from 'react-icons/vsc'
import * as FiIcon from 'react-icons/fi'
import * as AiIcon from 'react-icons/ai'





function Navbar() {
    return (
        <>
            <div className="navbar">
                <nav className="nav-horizontal">
                    <h3 className="dashboard">DASH-BOARD</h3>
                    <ul className="topnav">
                        <li className="badge"><Badge badgeContent={2} color="secondary" >
                            <IoIcon.IoIosNotificationsOutline fontSize="25px" />
                        </Badge>
                        </li>
                        <li className="avatar"> <Avatar src="./Images/manu.JPG" /></li>
                        <li className="to-do-list"><BsIcon.BsThreeDots fontSize="25px" /></li>
                    </ul>
                </nav>
            </div>

            <div className="sidebar">
                <nav className="nav-vertical">
                    <ul className="nav-menu">
                        <li className="menu">  MENU </li>
                        <li className="dash">   <Link to="/dashboard" style={{color:'white'}}> <RiIcon.RiDashboardFill fontSize="15px" /> Dashboard</Link></li>
                        <li className="contact"> <Link to="/employee-contact" style={{color:'white'}}> <TiIcon.TiContacts /> Employee contact</Link></li>
                        <li className="reminder"> <Link to="/reminder" style={{color:'white'}}> <MdIcon.MdAttachFile /> Reminder</Link></li>
                        <li className="reports"> <Link to="/reports" style={{color:'white'}}> <VscIcon.VscReport /> Reports</Link></li>
                        <li className="calendar"> <Link to="/calendar" style={{color:'white'}}> <BsIcon.BsCalendar /> Calendar</Link></li>
                        <li className="account">  ACCOUNT</li>
                        <li className="settings" > <Link to="/settings" style={{color:'white'}}> <FiIcon.FiSettings /> Settings</Link></li>
                        <li className="logout"> <Link to="/logout" style={{color:'white'}}> < AiIcon.AiOutlineLogout /> Log out</Link></li>
                    </ul>
                </nav>
            </div>

        </>
    );
}

export default Navbar

