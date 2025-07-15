import { Container, Button, Card, Table } from "react-bootstrap";
import { formatPrice } from "../utils/format-price";
import { initialProducts } from "../mocks/products";
import StockBadge from "../components/StockBadge";
import { Pencil, Trash } from "lucide-react";

const Dashboard: React.FC = () => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("pt-BR").format(date);
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Dashboard de Produtos</h1>
        <Button
          variant="primary"
          size="lg"
          onClick={() => console.log("teste")}
        >
          <i className="bi bi-plus-circle me-2"></i>
          Adicionar Produto
        </Button>
      </div>

      <Card>
        <Card.Body>
          <Table responsive striped hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Preço</th>
                <th>Estoque</th>
                <th>Criado em</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {initialProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>
                    <div>
                      <strong>{product.name}</strong>
                    </div>
                  </td>
                  <td>{product.category}</td>
                  <td>{formatPrice(product.price)}</td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <span>{product.stock}</span>
                      <StockBadge stock={product.stock} />
                    </div>
                  </td>
                  <td>{formatDate(product.createdAt)}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={() => console.log("ola")}
                      >
                        <Pencil />
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => console.log("teste")}
                      >
                        <Trash />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Dashboard;
