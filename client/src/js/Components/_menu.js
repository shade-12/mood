import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Menu() {

  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handle2Close = () => setShow2(false);
  const handle2Show = () => setShow2(true);
  const handle3Close = () => setShow3(false);
  const handle3Show = () => setShow3(true);

  return (
    <div>
      <div id = "dotsdiv">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dots">
          </Dropdown.Toggle>

          <Dropdown.Menu>

            <Dropdown.Item href="#/action-2" onClick={handle2Show}>Add Friend</Dropdown.Item>
            <Modal show={show2} onHide={handle2Close}>
              <Modal.Header closeButton>
                <Modal.Title>Add Friend</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handle2Close}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            <Dropdown.Item href="#/action-3" onClick={handle3Show}>Add Hobbies</Dropdown.Item>
            <Modal show={show3} onHide={handle3Close}>
              <Modal.Header closeButton>
                <Modal.Title>Add Hobby</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Hobby"
                  />
                </InputGroup>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handle3Close}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Menu;