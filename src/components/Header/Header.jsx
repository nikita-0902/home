import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';




import h from '../Header/Header.module.css';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import AssessmentIcon from '@material-ui/icons/Assessment';
import HomeIcon from '@material-ui/icons/Home';



function Header({ active, setActive }) {

    return (
        <div className={active ? h.menu.active : h.menu} onClick={() => setActive(false)}>
            <div className={h.blur} />
            <div className={h.menu__content} >
                <div className={h.menu__header}>
                    <ul>
                        <li><NavLink to='/home' >Home <span className={h.box}><HomeIcon fontSize="small" /></span></NavLink> </li>
                        <li> <NavLink to='/aboutMe' >About Me <span className={h.box}><AccountBoxIcon fontSize="small" /></span></NavLink></li>
                        <li><NavLink to='/portfolio'>Portfolio <span className={h.box}><MenuBookIcon fontSize="small" /></span></NavLink></li>
                        <li><NavLink to='/skills'>Skills <span className={h.box}><AssessmentIcon fontSize="small" /></span></NavLink></li>
                        <li><NavLink to='/contactUs'>Contact Us <span className={h.box}><ContactPhoneIcon fontSize="small" /></span></NavLink></li>

                    </ul>
                </div>
            </div>


        </div >

    )
}


export default Header

