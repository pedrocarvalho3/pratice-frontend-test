import { Modal, Button } from "react-bootstrap";
import type { Product } from "../types";

interface DeleteModalProps {
  show: boolean;
  onHide: () => void;
  onDelete: () => void;
  product?: Product;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  show,
  onHide,
  onDelete,
  product,
}) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar Exclusão</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Tem certeza que deseja excluir o produto{" "}
          <strong>{product?.name}</strong>?
        </p>
        <p className="text-muted">Esta ação não pode ser desfeita.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={onDelete}>
          Excluir
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
