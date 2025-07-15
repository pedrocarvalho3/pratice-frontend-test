import { Container, Button, Card, Table, Alert } from "react-bootstrap";
import { formatPrice } from "../utils/format-price";
import StockBadge from "../components/StockBadge";
import { Pencil, Trash } from "lucide-react";
import { formatDate } from "../utils/format-date";
import { useProducts } from "../hooks/useProducts";
import { useState } from "react";
import type { Product, ProductFormData } from "../types";
import ProductModal from "../components/ProductModal";
import DeleteModal from "../components/DeleteModal";

const Dashboard: React.FC = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | undefined>();

  const [alert, setAlert] = useState<{
    type: "success" | "danger";
    message: string;
  } | null>(null);

  const handleSaveProduct = (productData: ProductFormData) => {
    if (selectedProduct) {
      updateProduct(selectedProduct.id, productData);
      showAlert("success", "Produto atualizado com sucesso!");
    } else {
      addProduct(productData);
      showAlert("success", "Produto adicionado com sucesso!");
    }
    setSelectedProduct(undefined);
  };

  const handleDeleteProduct = () => {
    if (productToDelete) {
      deleteProduct(productToDelete.id);
      showAlert("success", "Produto excluído com sucesso!");
      setProductToDelete(undefined);
      setShowDeleteModal(false);
    }
  };

  const showAlert = (type: "success" | "danger", message: string) => {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Dashboard de Produtos</h1>
        <Button
          variant="primary"
          size="lg"
          onClick={() => {
            setSelectedProduct(undefined);
            setShowModal(true);
          }}
        >
          <i className="bi bi-plus-circle me-2"></i>
          Adicionar Produto
        </Button>
      </div>

      {alert && (
        <Alert variant={alert.type} dismissible onClose={() => setAlert(null)}>
          {alert.message}
        </Alert>
      )}

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
              {products.map((product) => (
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
                        onClick={() => {
                          setSelectedProduct(product);
                          setShowModal(true);
                        }}
                      >
                        <Pencil />
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => {
                          setProductToDelete(product);
                          setShowDeleteModal(true);
                        }}
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

      <ProductModal
        show={showModal}
        onHide={() => setShowModal(false)}
        product={selectedProduct}
        onSave={handleSaveProduct}
      />

      <DeleteModal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        onDelete={handleDeleteProduct}
        product={productToDelete}
      />
    </Container>
  );
};

export default Dashboard;
