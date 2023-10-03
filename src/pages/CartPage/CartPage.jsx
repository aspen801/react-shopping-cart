import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import "./CartPage.css";

import PlusButton from "/assets/plus.svg";
import MinusButton from "/assets/minus.svg";

const EmptyCartMessage = () => (
    <div className="cart__empty-message">
        <h1>Cart is empty right now 😔</h1>
    </div>
);

const CartItem = ({ cartItem, index, removeFromCart, addToCart, fullyRemoveFromCart }) => (
  <div key={index}>
    <div className="cart__item">
      <div className="cart__img-container">
        <img src={cartItem.product.image} alt="" />
        <div className="cart__item-img-price-container">
            <p>
              $ {cartItem.product.price}
            </p>
        </div>
      </div>
      <div className="cart__item-info">
        <div className="cart__item-info-top">
          <h1>{cartItem.product.title}</h1>
          <div className="cart__quantity-counter">
            <button onClick={() => {removeFromCart(cartItem.product)}}><img src={MinusButton} alt="" /></button>
            <div><h1>{cartItem.quantity}</h1></div>
            <button onClick={() => {addToCart(cartItem.product)}}><img src={PlusButton} alt="" /></button>
          </div>
          <div className="cart__item-info-top-price-container">
            <p>
              $ {cartItem.product.price}
            </p>
          </div>
        </div>
        <div className="cart__item-info-bottom">
          <h1>{cartItem.product.description}</h1>
          <button onClick={() => {fullyRemoveFromCart(cartItem.product)}}>Remove</button>
        </div>
      </div>
    </div>
    <hr className="cart__divider" />
  </div>
);

const SummaryArea = ({ getCartTotal, shippingCost }) => (
  <div className="cart__summary-area">
    <h1>Summary</h1>
    <p><span>Subtotal:</span> <span className="price">{getCartTotal()}.00 $</span></p>
    <hr className="cart__summary-divider"/>
    <p><span>Shipping:</span> <span className="price">{shippingCost}.00 $</span></p>
    <hr className="cart__summary-divider"/>
    <p><span>Order total:</span> <span className="price">{getCartTotal() + shippingCost}.00 $</span></p>
    <div className="cart__summary-checkout-button">
      <button>Checkout</button>
    </div>
  </div>
);

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, fullyRemoveFromCart, getCartTotal } = useContext(CartContext);

  //imagine it fetch from server :)
  const shippingCost = 15;

  return (
    <div className="cart__wrapper">
      <div className="cart__content">
        <div className="cart__text-area">
          <h1>Shopping cart</h1>
        </div>
        <hr className="cart__divider" />
        <div className="cart__checkout-area">
          <div className="cart__item-area">
            {cartItems.length === 0 ? <EmptyCartMessage/> : cartItems.map((cartItem, index) => (
              <CartItem  key={index} addToCart={addToCart} removeFromCart={removeFromCart} fullyRemoveFromCart={fullyRemoveFromCart} cartItem={cartItem} />
            ))}
          </div>
          <hr className="cart__summary-area-divider" />
          <SummaryArea getCartTotal={getCartTotal} shippingCost={shippingCost}/>
        </div>
      </div>
    </div>
  );
};

export default CartPage;