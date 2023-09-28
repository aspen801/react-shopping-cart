import { useEffect, useState } from "react";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch(
      "https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}"
    )
      .then((response) => response.json())
      .then((responseData) => {
        const transformedData = responseData.data.products.edges.map((item) => ({
          id: item.node.id,
          title: item.node.title,
          description: item.node.description,
          image: item.node.featuredImage.url,
          price: item.node.variants.edges[0].node.price.amount,
        }));
        setProducts(transformedData);
      })
      .catch((err) => console.error(err));
  }, []);

  return products;
};

export default useFetchProducts;