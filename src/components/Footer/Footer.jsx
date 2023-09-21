import React from "react";
import "./Footer.css"
import logoImage from "/assets/paper-plane.svg"

const Footer = () => {

    return(
        <footer className="footer__main-wrapper">
            <div className="footer__logo-container">
                <img src={logoImage} alt="" />
                <h1>Mock<span style={{color: '#537977'}}>shop</span>.</h1>
            </div>
            <div className="footer__info">
                <p>Made by aspen801 <a target="_blank" href="https://github.com/aspen801/react-shopping-cart">GitHub</a></p>
            </div>
            <div className="footer__info">
                <p>Using <a target="_blank" href="https://mock.shop/">Mock.shop API</a></p>
            </div>
            <div className="footer__info">
                <p>© 2023</p>
            </div>

        </footer>
    )
}

export default Footer;