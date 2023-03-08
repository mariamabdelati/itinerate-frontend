import logo from "../assets/svg/logo.svg";
import React from "react";

const Footer = () => {
    return (
        <>
            <div className="divider"></div>
            <footer className="footer">
                <div className="wrapper grid">
                    <div className="footer-logo flex">
                        <a className="footer-brand" href="src/components#">
                            <img src={logo} alt="Logo"/>
                        </a>
                    </div>

                    <div className="footer-links">
                        <ul className="footer-list">
                            <span className="footer-title">Navigation</span>
                            <li className="footer-item">
                                <a href="src/components#" className="footer-link">Home</a>
                            </li>
                            <li className="footer-item">
                                <a href="src/components#" className="footer-link">Top Destinations</a>
                            </li>
                            <li className="footer-item">
                                <a href="src/components#" className="footer-link">Top Countries</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <ul className="footer-list">
                            <span className="footer-title">Helpful Links</span>
                            <li className="footer-item">
                                <a href="src/components#" className="footer-link">About Us</a>
                            </li>
                            <li className="footer-item">
                                <a href="src/components#" className="footer-link">Contact Us</a>
                            </li>
                            <li className="footer-item">
                                <a href="src/components#" className="footer-link">Privacy Policy</a>
                            </li>
                            <li className="footer-item">
                                <a href="src/components#" className="footer-link">Terms of Use</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <span className="footer-title">Contact Us</span>
                        <span className="footer-item">itinerate@gmail.com</span>
                        <span className="footer-item">+20 112 3344556</span>
                    </div>
                </div>
            </footer>
        </>
    )

}

export default Footer