import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { initialProducts } from "../mocks/products";

const HomePage: React.FC = () => {
  return (
    <Container>
      <div className="text-center mb-5">
        <h1 className="display-4 mb-4">Catálogo de Produtos</h1>
        <p className="lead text-muted">
          Confira nossa seleção de produtos disponíveis
        </p>
      </div>

      <Row>
        {initialProducts.map((product) => (
          <Col key={product.id} md={6} lg={4} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
