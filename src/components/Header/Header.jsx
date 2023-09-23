import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { Link } from "react-router-dom";
import "./Header.css";

import logoImage from "/assets/paper-plane.svg";
import searchIcon from "/assets/search.svg";
import cartIcon from "/assets/shopping-cart.svg";
import burgerMenu from "/assets/menu-burger.svg";
import crossIcon from "/assets/cross.svg";

const getCurrentDimension = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

const Header = () => {

  const { getCartQuantity } = useContext(CartContext);
  const [visible, setVisible] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  const toggleBurgerMenu = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  useEffect(() => {
    const updateDimension = () => {
      if(screenSize.width >= 900){
        setVisible(false);
      } 
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <header>
      <div className={`header__burger-menu ${visible ? "visible" : ""}`}>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Sport</a>
        <a href="#">Blank</a>
        <a href="#">Blank</a>
        <a href="#">Blank</a>
      </div>
      <div className="header__burger-menu-button-wrapper">
        <button
          className={"header__burger-menu-button"}
          onClick={() => {
            toggleBurgerMenu(), console.log("lol");
          }}
        >
          <img src={visible ? crossIcon : burgerMenu} alt="" />
        </button>
      </div>
      <div className="header__logo-container">
        <Link to={"/"}>
          <img src={logoImage} alt="" />
          <h1>
            Mock<span style={{ color: "#537977" }}>shop</span>.
          </h1>
        </Link>
      </div>
      <div className="header__navigation">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Sport</a>
        <a href="#">Blank</a>
        <a href="#">Blank</a>
        <a href="#">Blank</a>
      </div>
      <div className="header__side-menu">
        <button className="header__side-menu-search-button-container">
          <img src={searchIcon} alt="" />
        </button>
        <Link to={"/cart"}>
          <button className="header__side-menu-cart-button-container">
            <img src={cartIcon} alt="" />
            <div className="header__side-menu-cart-counter">
              <p>{getCartQuantity()}</p>
            </div>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
