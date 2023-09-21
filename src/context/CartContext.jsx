import React, { useState, createContext } from "react";

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  fullyRemoveFromCart: () => {},
  getCartTotal: () => {},
  getCartQuantity: () => {},
});

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.product.id === product.id,
    );

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.product.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      );
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.product.id === product.id,
    );

    if (isItemInCart) {
      if (isItemInCart.quantity === 1) {
        setCartItems(
          cartItems.filter((cartItem) => cartItem.product.id !== product.id),
        );
      } else {
        setCartItems(
          cartItems.map((cartItem) =>
            cartItem.product.id === product.id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem,
          ),
        );
      }
    }
  };

  const fullyRemoveFromCart = (product) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.product.id === product.id,
    );

    if (isItemInCart) {
      setCartItems(
        cartItems.filter((cartItem) => cartItem.product.id !== product.id),
      );
    }
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, cartItem) => total + cartItem.product.price * cartItem.quantity,
      0,
    );
  };

  const getCartQuantity = () => {
    return cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0,
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        fullyRemoveFromCart,
        getCartTotal,
        getCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;