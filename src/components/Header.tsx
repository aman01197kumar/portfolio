import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid>
        <Navbar.Brand href="#">Aman Kumar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav  className="ms-auto text-center my-2 my-lg-0"
            navbarScroll>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About me</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
            <Nav.Link href="#pricing">Contact me</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;