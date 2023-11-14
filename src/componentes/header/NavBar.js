import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand  href="#">Lacteos mi vaquita</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Contáctanos</Nav.Link>
            <Nav.Link href="#action2">Ofertas</Nav.Link>
            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Helados</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Bebidas</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Quesos</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Postres</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
            </NavDropdown>            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder=""
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>

      <CartWidget/>

    </Navbar> 
    
  );
}

export default NavBar;