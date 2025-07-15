import { Navbar, Container, Nav } from "react-bootstrap";

const AppNavbar: React.FC<{
  currentPage: string;
  onPageChange: (page: string) => void;
}> = ({ currentPage, onPageChange }) => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="#home">
          <i className="bi bi-box-seam me-2"></i>
          Sistema de Produtos
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => onPageChange("home")}
              className={currentPage === "home" ? "active" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => onPageChange("dashboard")}
              className={currentPage === "dashboard" ? "active" : ""}
            >
              Dashboard
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
