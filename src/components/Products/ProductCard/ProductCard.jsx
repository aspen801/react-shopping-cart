import React, {useContext} from "react";
import { CartContext } from "../../../context/CartContext.jsx";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./ProductCard.css";


const ProductCard = ({product}) => {

    const notify = () => toast(`${product.title} was added to cart!`, {autoClose: 1000});

    const { addToCart } = useContext(CartContext);

    return (
        <div className="card__wrapper">
            <div className="card__photo-area">
                <img src={product.image} alt="" loading="lazy"/>
            </div>
            <div className="card__info-area"> 
                <div className="card__info-area-title">
                    <h3>{product.title}</h3>
                </div>  
                <div className="card__info-area-description">
                    <p>{product.description ? product.description : 'No desctiption yet'}</p>
                </div>
                <div className="card__info-area-price">
                    <p>{"$ " + product.price}</p>
                    <button className="" onClick={() => {addToCart(product), notify()}}>{"Add to cart"}</button>
                </div>    
            </div>
        </div>
    )
}

export default ProductCard;
