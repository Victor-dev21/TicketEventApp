import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Outlet } from 'react-router-dom';
function NavBar({logout}) {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/admin/dashboard">Logo</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/admin/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/admin/event/new">New Event</Nav.Link>
              <Nav.Link href="/admin/events">My Events</Nav.Link>
              <Button className="btn-secondary" size="btn-sm" onClick={logout}>Logout</Button>
            </Nav>
          </Container>
        </Navbar>
        <Outlet /> 
      </>
    );
  }
  
  export default NavBar;