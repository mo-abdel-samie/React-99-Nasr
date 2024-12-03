import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

export default function ProductsContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(({ products }) => setProducts(products));

    console.log("useEffect");

    // const timer = setInterval(() => {
    //   console.log("Timer from settimeout");
    // }, 1000);

    return () => {
    //   clearInterval(timer);
    };
  }, []);

  return (
    <Container>
      <Row className="justify-content-md-center">
        {products.map(({ title, description, thumbnail, id }, i) => (
          <Col xs lg="4" key={i}>
            <ProductCard
              id={id}
              title={title}
              description={description}
              ProductImg={thumbnail}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
