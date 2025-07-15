import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

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
        <Col key={1} md={6} lg={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-start">
                Olá
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Teste</Card.Subtitle>
              <Card.Text>jdfshakfjdhskfshau</Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <span className="h5 text-primary mb-0">10,00</span>
                <small className="text-muted">Estoque: 2</small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
