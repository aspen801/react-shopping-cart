import React, {useContext} from "react";
import { CartContext } from "../../../App";
import "./ProductCard.css";

const ProductCard = ({product, productVariants}) => {
    
    if(!product){
        return (
            <div>
                Loading...
            </div>
        )
    }

    const { addToCart } = useContext(CartContext);
    
    const productImage = product.featuredImage.url;
    const variantPrice = productVariants.edges[0].node.price.amount;

    return (
        <div className="card__wrapper">
            <div className="card__photo-area">
                <img src={productImage} alt="" />
            </div>
            <div className="card__info-area"> 
                <div className="card__info-area-title">
                    <h3>{product.title}</h3>
                </div>  
                <div className="card__info-area-description">
                    <p>{product.description ? product.description : 'No desctiption yet'}</p>
                </div>
                <div className="card__info-area-price">
                    <p>{"$ " + variantPrice}</p>
                    <button onClick={() => addToCart({product, productVariants})}>Add to cart</button>
                </div>    
            </div>
        </div>
    )
}

export default ProductCard;
