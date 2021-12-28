import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        // bg="dark"
        variant="dark"
        className="mb-2 shadow"
        style={{ backgroundColor: "#001529", fontFamily: "koHo" }}
      >
        <Container>
          <Navbar.Brand to="/">Attandance App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home" className="pt-2">
                Home
              </Nav.Link>
            </Nav>
            <Nav>
              <Link to="/register_student">
                <button className="btn btn-outline-primary btn-sm px-3 mt-1">
                  Add a Student{" "}
                </button>
              </Link>
              <Link eventKey={2} to="/all_information">
                <button className="btn btn-outline-primary btn-sm px-3 mt-1 mx-lg-2 ">
                  View All Inforamtion
                </button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
