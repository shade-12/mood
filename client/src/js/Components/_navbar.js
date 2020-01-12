import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(props) {
    return (
      <Navbar>
        <Navbar.Brand href="#home"><b><h2>{props.name && `${props.name}'s`} M∞d.</h2></b></Navbar.Brand>
      </Navbar>
    );
}

export default NavBar;
