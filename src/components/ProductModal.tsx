import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import type { Product, ProductFormData, ProductFormErrors } from "../types";

const ProductModal: React.FC<{
  show: boolean;
  onHide: () => void;
  product?: Product;
  onSave: (product: ProductFormData) => void;
}> = ({ show, onHide, product, onSave }) => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    description: "",
    price: 0,
    category: "",
    stock: 0,
  });

  const [errors, setErrors] = useState<ProductFormErrors>({});

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        stock: product.stock,
      });
    } else {
      setFormData({
        name: "",
        description: "",
        price: 0,
        category: "",
        stock: 0,
      });
    }
    setErrors({});
  }, [product, show]);

  const validateForm = (): boolean => {
    const newErrors: ProductFormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.description.trim())
      newErrors.description = "Descrição é obrigatória";
    if (formData.price <= 0) newErrors.price = "Preço deve ser maior que zero";
    if (!formData.category.trim())
      newErrors.category = "Categoria é obrigatória";
    if (formData.stock < 0) newErrors.stock = "Estoque não pode ser negativo";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSave(formData);
      onHide();
    }
  };

  const handleChange = (
    field: keyof ProductFormData,
    value: string | number
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          {product ? "Editar Produto" : "Adicionar Produto"}
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nome *</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  isInvalid={!!errors.name}
                  placeholder="Digite o nome do produto"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Categoria *</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.category}
                  onChange={(e) => handleChange("category", e.target.value)}
                  isInvalid={!!errors.category}
                  placeholder="Digite a categoria"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.category}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Descrição *</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              isInvalid={!!errors.description}
              placeholder="Digite a descrição do produto"
            />
            <Form.Control.Feedback type="invalid">
              {errors.description}
            </Form.Control.Feedback>
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Preço *</Form.Label>
                <Form.Control
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) =>
                    handleChange("price", parseFloat(e.target.value) || 0)
                  }
                  isInvalid={!!errors.price}
                  placeholder="0.00"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.price}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Estoque *</Form.Label>
                <Form.Control
                  type="number"
                  value={formData.stock}
                  onChange={(e) =>
                    handleChange("stock", parseInt(e.target.value) || 0)
                  }
                  isInvalid={!!errors.stock}
                  placeholder="0"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.stock}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit">
            {product ? "Atualizar" : "Adicionar"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ProductModal;
