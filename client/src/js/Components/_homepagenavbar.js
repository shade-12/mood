import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar(props) {
    return (
      <Navbar>
        <Navbar.Brand href="#home"><b><h3>Relax or Die</h3></b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="mr-auto">
            <Nav.Link href="#profile"><b><h3>Profile</h3></b></Nav.Link>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Brand href="#link"><b><h3>Notifications</h3></b></Navbar.Brand>
            </Navbar.Collapse>
            <Nav.Link href="#link"><b><h3></h3></b></Nav.Link>
            
          </Nav>
      </Navbar>
    );
}

export default NavBar;