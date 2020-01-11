import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(props) {
    return (
      <Navbar>
        <Navbar.Brand href="#home"><b><h3>Mood.</h3></b></Navbar.Brand>
      </Navbar>
    );
}

export default NavBar;
