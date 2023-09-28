import React from "react";
import "./Products.css";
import ProductCard from "./ProductCard/ProductCard";
import useFetchProducts from "../../hooks/useFetchProducts"; // Импортируем кастомный хук

const Products = () => {
    
  const products = useFetchProducts(); // Используем кастомный хук для получения данных

  return (
    <div className="products__wrapper">
      <div className="products__text-area">
        <h1>What's trending now</h1>
        <p>Discover the most trending products in Mockshop</p>
      </div>
      {products.length > 0 ? (
        <div className="products__cards-area">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Products;