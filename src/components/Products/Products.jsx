import React, { useEffect, useState } from "react";
import "./Products.css"
import ProductCard from "./ProductCard/ProductCard";

const Products = () => {

    const [products, setProducts] = useState([]);

    const transformData = (responseData) => {
        const transformedData = responseData.map((item) => {
            return {
                id: item.node.id,
                title: item.node.title,
                description: item.node.description,
                image: item.node.featuredImage.url,
                price: item.node.variants.edges[0].node.price.amount
            }
        })
        
        return transformedData;
    }

    useEffect(() => {
        fetch('https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}')
            .then((response) => response.json())
            .then((responseData) => {
                setProducts(transformData(responseData.data.products.edges));
            })
            .catch((err) => console.error(err));
    }, [])

    return (
        <div className="products__wrapper">
            <div className="products__text-area">
                <h1>What's trending now</h1>
                <p>Discover the most trending products in Mockshop</p>
            </div>
            <div className="products__cards-area">
                {products.map((product, index) => 
                    <ProductCard key={index} product={product} /*productVariants={product.node.variants}*//>
                )}
            </div>
        </div>
    )
}

export default Products;