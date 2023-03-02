import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/svg/logo.svg";
import { NavbarItems } from "./NavbarItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
    state = {
        clicked: false,
        isLoggedIn: false
    }
    handleNavbarToggle = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-wrapper">
                    <ul className={this.state.clicked ? "nav-items active" : "nav-items"}>
                        {NavbarItems.map(( item, index ) => {
                            return (
                                <li key={index} className="nav-item">
                                    <Link className={item.cName} to={item.url}>{item.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="menu-icon" onClick={this.handleNavbarToggle}>
                    <FontAwesomeIcon className="icon" icon={this.state.clicked ? faXmark : faBars}/>
                </div>
                <div className="site-logo">
                    <a className="navbar-brand mx-auto" href="src/components#">
                        <img className="brand-logo" src={logo} alt="Logo"/>
                    </a>
                </div>
                <div className="actions">
                    {this.state.isLoggedIn ? (
                        <>
                            <a className="btn btn-solid btn-gap" href="#">Profile</a>
                            <a className="btn btn-primary" href="#">Logout</a>
                        </>
                    ) : (
                        <>
                            <a className="btn btn-solid btn-gap" href="#">Login</a>
                            <a className="btn btn-primary" href="#">Sign Up</a>
                        </>
                    )}
                </div>
            </nav>
        )
    }
}

export default Navbar;


