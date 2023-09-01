import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import Skills from "./Skills";

function Header() {
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="position-fixed w-100 z-index-1111">
        <Container fluid>
          <Navbar.Brand href="#">Aman Kumar</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto text-center my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#aboutme">About me</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#project">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id="home">
        <LandingPage />
      </div>
      <div id="aboutme">
        <AboutMe />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="project">
        <Projects />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}

export default Header;
