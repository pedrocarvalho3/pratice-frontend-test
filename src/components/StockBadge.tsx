import { Badge } from "react-bootstrap";

interface StockBadgeProps {
  stock: number;
}

const StockBadge: React.FC<StockBadgeProps> = ({ stock }) => {
  if (stock === 0) return <Badge bg="danger">Esgotado</Badge>;
  if (stock < 10) return <Badge bg="warning">Baixo Estoque</Badge>;
  return <Badge bg="success">Disponível</Badge>;
};

export default StockBadge;
