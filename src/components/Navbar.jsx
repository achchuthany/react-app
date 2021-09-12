import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MyUoJ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              exact
              to="/"
              className="nav-link"
              activeClassName="border-bottom border-success"
            >
              Home
            </NavLink>
            <NavLink
              to="/registration"
              className="nav-link"
              activeClassName="border-bottom border-success"
            >
              Registration
            </NavLink>
            <NavLink
              to="/blog/posts"
              className="nav-link"
              activeClassName="border-bottom border-success"
            >
              Posts
            </NavLink>
            <NavLink
              to="/login"
              className="nav-link"
              activeClassName="border-bottom border-success"
            >
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
