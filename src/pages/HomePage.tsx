import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const HomePage: React.FC = () => {
    const initialProducts = [
      {
        id: 1,
        name: "Notebook Dell",
        description: "Notebook Dell Inspiron 15 com 8GB RAM e 256GB SSD",
        price: 2499.99,
        category: "Eletrônicos",
        stock: 15,
        createdAt: new Date("2025-06-15"),
        updatedAt: new Date("2025-07-15"),
      },
      {
        id: 2,
        name: "Mouse Logitech",
        description: "Mouse óptico sem fio Logitech M280",
        price: 89.9,
        category: "Acessórios",
        stock: 32,
        createdAt: new Date("2025-05-20"),
        updatedAt: new Date("2025-07-20"),
      },
      {
        id: 3,
        name: "Teclado Mecânico",
        description: "Teclado mecânico RGB com switches Cherry MX",
        price: 299.99,
        category: "Acessórios",
        stock: 8,
        createdAt: new Date("2025-02-11"),
        updatedAt: new Date("2025-02-11"),
      },
    ];

    const formatPrice = (price: number) => {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price);
    };

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
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between align-items-start">
                    {product.name}
                    {product.stock}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {product.category}
                  </Card.Subtitle>
                  <Card.Text>{product.description}</Card.Text>
                  <div className="d-flex justify-content-between align-items-bottom">
                    <span className="h5 text-primary mb-0">
                      {formatPrice(product.price)}
                    </span>
                    <small className="text-muted">
                      Estoque: {product.stock}
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
};

export default HomePage;
