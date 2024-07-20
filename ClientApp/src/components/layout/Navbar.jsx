import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Navbar";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Aquifer PE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Events">Events</Nav.Link>
            <Nav.Link href="#Jobs">Jobs</Nav.Link>
            <Nav.Link href="#Blog">Blog</Nav.Link>
            <Nav.Link href="#Stories">Stories</Nav.Link>
            <Nav.Link href="#FAQ">FAQ</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Button variant="light" href="#login">
              Login
            </Button>
            <Button variant="light" href="#register" className="ms-3">
              Register
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
