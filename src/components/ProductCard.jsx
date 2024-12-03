import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductCard({ title, description, ProductImg, id }) {
  return (
    <Card className="shadow-lg">
      <Card.Img variant="top" src={ProductImg} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={`/shop/${id}`}>Read More</Link>
      </Card.Body>
    </Card>
  );
}
