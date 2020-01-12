import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Carousel from 'react-bootstrap/Carousel'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

import {ButtonToolbar} from 'react-bootstrap';

import { Link } from 'react-router-dom';

import axios from 'axios';
import Image from 'react-bootstrap/Image'
import userIcon from '../../images/sword.jpg';
import m1 from '../../images/monster1.png';
import m2 from '../../images/monster2.png';
import m3 from '../../images/monster3.png';
import m4 from '../../images/monster4.png';
import m5 from '../../images/monster5.png';
import m6 from '../../images/monster6.png';

class MyMood extends React.Component{

  state = { theme: null }

  constructor(props) {
    super(props);
    this.state = {
      current_mood: '',
    };
  }

  chooseTheme = (theme, evt) => {
    evt.preventDefault();
    if (theme.toLowerCase() === 'reset') { theme = null }
    this.setState({ theme });
  }


  render() {

    const imageClick = (mood) => {
      console.log(mood);
      this.setState({current_mood: mood});
    }

    return (
      <div>
        <Menu></Menu>
        <section class="container">
          <div class="one">
            <Image src={userIcon} roundedCircle id = "userIcon"/>
          </div>
          <div class="two">
           <h4> UserName</h4>
           <h5> Heart</h5>
           <h5> Level</h5>
          </div>
        </section>
        <br></br>

        <PopUp></PopUp>

        <Carousel>
          <Carousel.Item class = "carouselItem">
            <Link to='/fight'>
              <img src = {m1}/>
            </Link>
            <Carousel.Caption>
              <div class = "dino-text">
              <h3>Dino-ster</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item class = "carouselItem">
            <Link to='/fight'>
              <img src = {m2}/>
            </Link>
            <Carousel.Caption>
              <div class = "dino-text">
              <h3>Fat-bean</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Link to='/fight'>
              <img src = {m3}/>
            </Link>
            <Carousel.Caption>
              <div class = "dino-text">
                <h3>Fluff-ball</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Link to='/fight'>
              <img src = {m4}/>
            </Link>
            <Carousel.Caption>
              <div class = "dino-text">
                <h3>Mad-alien</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Link to='/fight'>
              <img src = {m5}/>
            </Link>
            <Carousel.Caption>
              <div class = "dino-text">
                <h3>Stitch</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Link to='/fight'>
              <img src = {m6}/>
            </Link>
            <Carousel.Caption>
              <div class = "dino-text">
                <h3>Big-bird</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h1>{this.state.current_mood}</h1>
      </div>
    );
  }
}

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


export default MyMood;
