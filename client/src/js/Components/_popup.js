import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function PopUp() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handle1Close = () => setShow1(false);
  const handle1Show = () => setShow1(true);
  const handle2Close = () => setShow2(false);
  const handle2Show = () => setShow2(true);
  const handle3Close = () => setShow3(false);
  const handle3Show = () => setShow3(true);

  return (
    <>
      <Button className="modal-button" variant="secondary" onClick={handle1Show}>
        Close Friends
      </Button>

      <Modal show={show1} onHide={handle1Close}>
        <Modal.Header closeButton>
          <Modal.Title>Close Friends</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handle1Close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Button className="modal-button" variant="secondary" onClick={handle2Show}>
        Hobbies
      </Button>

      <Modal show={show2} onHide={handle2Close}>
        <Modal.Header closeButton>
          <Modal.Title>Hobbies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handle2Close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Button className="modal-button" variant="secondary" onClick={handle3Show}>
        Monsters Defeated
      </Button>

      <Modal show={show3} onHide={handle3Close}>
        <Modal.Header closeButton>
          <Modal.Title>Monsters Defeated</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handle3Close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp;