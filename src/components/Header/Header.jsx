import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css"

import logoImage from "/assets/paper-plane.svg"
import searchIcon from "/assets/search.svg"
import cartIcon from "/assets/shopping-cart.svg"


const Header = () => {

    return (
        <header>
            <div className="header__logo-container">
                <Link to={"/"}>
                    <img src={logoImage} alt="" />
                    <h1>Mock<span style={{color: '#537977'}}>shop</span>.</h1>
                </Link>
                
            </div>
            <div className="header__navigation">
                <a href="#">Men</a>
                <a href="#">Woman</a>
                <a href="#">Sport</a>
                <a href="#">Blank</a>
                <a href="#">Blank</a>
                <a href="#">Blank</a>
            </div>
            <div className="header__side-menu">
                <button><img src={searchIcon} alt="" /></button>
                <Link to={"/cart"}><button><img src={cartIcon} alt="" /></button></Link>
            </div>
        </header>
    )
}

export default Header;