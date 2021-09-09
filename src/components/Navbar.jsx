import { Col, Navbar, Row, Nav, NavDropdown, Form, FormControl, Button, Container} from "react-bootstrap";

const NavBar = () => {
    return (
            <Navbar bg="light" expand="lg">
                <Container>
                <Navbar.Brand href="#home">MyUoJ</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Applications" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Applications</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            
                </Navbar.Collapse>
                </Container>
            </Navbar> );
}
 
export default NavBar;
