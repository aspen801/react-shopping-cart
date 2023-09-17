import React from "react";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import Products from "../../components/Products/Products";
import "./HomePage.css"


const HomePage = () => {
    
    return (
        <div className="main-wrapper">
            <HeroSlider />
            <Products />
        </div>
    )
}

export default HomePage