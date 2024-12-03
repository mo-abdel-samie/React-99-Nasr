import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useParams } from "react-router-dom";

export default function SingleProduct() {
  const [product, setProduct] = useState(null);  // false
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <MainLayout>
      {product && (
        <>
          <h1>{product.title}</h1>
          <img src={product.thumbnail} alt={product.title} />
          {product.images.map((img) => (
            <img width="150" src={img} alt={product.title} />
          ))}
        </>
      )}
    </MainLayout>
  );
}
