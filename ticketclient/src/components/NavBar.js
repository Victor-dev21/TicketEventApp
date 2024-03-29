import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {useEffect, useState} from 'react'
import { Outlet } from 'react-router-dom';


function NavBar({logout}) {
    const[nav,setNav] = useState(false);
    
    console.log("Navbar")
    return (
      
      <div>
        
        
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/user/home">Home</Nav.Link>
              <Nav.Link href="/user/tickets">My Tickets</Nav.Link>
              <Button className="btn-secondary" size="btn-sm" onClick={logout}>Logout</Button>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
  
  export default NavBar;