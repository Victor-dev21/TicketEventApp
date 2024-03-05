import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
function NavBar({logout}) {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/tickets">My Tickets</Nav.Link>
              <Button className="btn-secondary" size="btn-sm" onClick={logout}>Logout</Button>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default NavBar;