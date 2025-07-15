import React from "react";
import { Card, Badge } from "react-bootstrap";
import type { Product } from "../types";
import { formatPrice } from "../utils/format-price";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const getStockBadge = (stock: number) => {
    if (stock === 0) return <Badge bg="danger">Esgotado</Badge>;
    if (stock < 10) return <Badge bg="warning">Baixo Estoque</Badge>;
    return <Badge bg="success">Disponível</Badge>;
  };

  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-start">
          {product.name}
          {getStockBadge(product.stock)}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {product.category}
        </Card.Subtitle>
        <Card.Text>{product.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 text-primary mb-0">
            {formatPrice(product.price)}
          </span>
          <small className="text-muted">Estoque: {product.stock}</small>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
