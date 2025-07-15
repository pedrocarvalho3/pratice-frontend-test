import { Card } from "react-bootstrap";
import type { Product } from "../types";
import { formatPrice } from "../utils/format-price";
import StockBadge from "./StockBadge";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-start">
          {product.name}
          <StockBadge stock={product.stock} />
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
