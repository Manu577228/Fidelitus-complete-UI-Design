import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as GiIcons from "react-icons/gi";
import * as FcIcons from "react-icons/fc";
import * as MdIcons from "react-icons/md";
import * as GoIcons from "react-icons/go";
import * as FiIcons from "react-icons/fi";

export const SidebarData = [
{
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillDashboard />,
    cName: 'nav-text'
},
{
    title: 'HR Form',
    path: '/hr-form',
    icon: <AiIcons.AiOutlineForm />,
    cName: 'nav-text'
},
{
    title: 'Employee List',
    path: '/employee-list',
    icon: <CgIcons.CgUserList />,
    cName: 'nav-text'
},
{
    title: 'Add Outside Job Cards',
    path: '/add-outside-job-cards',
    icon: <AiIcons.AiOutlineIdcard/>,
    cName: 'nav-text'
},
{
    title: 'Add Inside Job Cards',
    path: '/add-inside-job-cards',
    icon: <GiIcons.GiIdCard />,
    cName: 'nav-text'
},
{
    title: 'Client Details',
    path: '/client-details',
    icon: <FcIcons.FcViewDetails />,
    cName: 'nav-text'
},
{
    title: 'Assigned Clients',
    path: '/assigned-clients',
    icon: <MdIcons.MdAssignmentInd />,
    cName: 'nav-text'
},
{
    title: 'Reminder',
    path: '/reminder',
    icon: <MdIcons.MdAddAlert/>,
    cName: 'nav-text'
},
{
    title: 'Report',
    path: '/report',
    icon: <GoIcons.GoReport />,
    cName: 'nav-text'
},
{
    title: 'Calendar',
    path: '/calendar',
    icon: <FaIcons.FaCalendarAlt />,
    cName: 'nav-text'
},
{
    title: 'Notifications',
    path: '/notifications',
    icon: <MdIcons.MdNotificationsNone/>,
    cName: 'nav-text'
},
{
    title: 'Request',
    path: '/request',
    icon: <FiIcons.FiGitPullRequest />,
    cName: 'nav-text'
},

]