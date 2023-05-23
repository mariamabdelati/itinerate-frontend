import React, { useState } from 'react'
import { Link } from "react-router-dom"
import logo from "../assets/svg/logo.svg"
import { NavbarItems } from "./NavbarItems"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

const Navbar = ( { isLoggedIn } ) => {
    const [active, setActive] = useState('nav-wrapper')

    const handleOpenNavbar = () => {
        setActive('nav-wrapper active')
    }

    const handleCloseNavbar = () => {
        setActive('nav-wrapper')
    }

    return (
        <section className="navbar-section">
            <nav className="nav-bar">
                <div className={active}>
                    <ul className="nav-items flex">
                        {NavbarItems.map(( item, index ) => {
                            return (
                                <li key={index} className="nav-item">
                                    <Link className={item.cName} to={item.url}>{item.title}</Link>
                                </li>
                            )
                        })}
                        <div className="mobile-actions flex">
                            {isLoggedIn ? (
                                <>
                                    <a className="btn btn-solid btn-gap" href="Navbar#">Profile</a>
                                    <a className="btn btn-primary" href="Navbar#">Logout</a>
                                </>
                            ) : (
                                <>
                                    <a className="btn btn-solid btn-gap" href="Navbar#">Login</a>
                                    <a className="btn btn-primary" href="Navbar#">Sign Up</a>
                                </>
                            )}
                        </div>
                    </ul>
                    <div className="close-nav menu-icon" onClick={handleCloseNavbar}>
                        <FontAwesomeIcon className="icon" icon={faXmark}/>
                    </div>
                </div>
                <div className="open-nav menu-icon" onClick={handleOpenNavbar}>
                    <FontAwesomeIcon className="icon" icon={faBars}/>
                </div>
                {/*<div className="menu-icon" onClick={this.handleNavbarToggle}>*/}
                {/*    <FontAwesomeIcon className="icon" icon={this.state.clicked ? faXmark : faBars}/>*/}
                {/*</div>*/}
                <div className="site-logo">
                    <a className="navbar-brand mx-auto" href="src/components#">
                        <img className="brand-logo" src={logo} alt="Logo"/>
                    </a>
                </div>
                <div className="actions hidden">
                    {isLoggedIn ? (
                        <>
                            <a className="btn btn-solid" href="Navbar#">Profile</a>
                            <a className="btn btn-primary" href="Navbar#">Logout</a>
                        </>
                    ) : (
                        <>
                            <a className="btn btn-solid" href="Navbar#">Login</a>
                            <a className="btn btn-primary" href="Navbar#">Sign Up</a>
                        </>
                    )}
                </div>
            </nav>
        </section>
    )

}

export default Navbar


