import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Carousel from 'react-bootstrap/Carousel'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import '../../styles/mymood.scss';

import {ButtonToolbar} from 'react-bootstrap';

import axios from 'axios';
import angry from '../../images/angry.jpg';
import confused from '../../images/confused.jpg';
import crying from '../../images/crying.jpg';
import depressed  from '../../images/depressed.jpg';
import happy from '../../images/happy.jpg';
import sleepy from '../../images/sleepy.jpg';
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
        <div id = "dotsdiv">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dots">
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" >Create Monster </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Add Friend</Dropdown.Item>
            <Dropdown.Item href="#/action-3"> Add Hobbies</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

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
    <img src = {m1}/>
    <Carousel.Caption>
      <div class = "dino-text">
      <h3>Dino-ster</h3>
      </div>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item class = "carouselItem">
    <img src = {m2}/>
    <Carousel.Caption>
      <div class = "dino-text">
      <h3>Fat-bean</h3>
      </div>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img src = {m3}/>
    <Carousel.Caption>
      <div class = "dino-text">
        <h3>Fluff-ball</h3>
      </div>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img src = {m4}/>
    <Carousel.Caption>
      <div class = "dino-text">
        <h3>Mad-alien</h3>
      </div>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img src = {m5}/>
    <Carousel.Caption>
      <div class = "dino-text">
        <h3>Stitch</h3>
      </div>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img src = {m6}/>
    <Carousel.Caption>
      <div class = "dino-text">
        <h3>Big-bird</h3>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


          {/* <div id = "user-info">
            <h2>Userr</h2>
            <Image src={userIcon} roundedCircle id = "userIcon"/>
          </div>
          <p>HTML</p>
          <div class="container">
          <div class="skills html">90%</div>
</div> */}

          {/* <h4> Monsters Defeated</h4>
        <div className="thumbnail-container">
        <img className="thumbnail" src={m1} onClick={() => imageClick('angry')}/>
        <img className="thumbnail" src={m2} onClick={() => imageClick('confused')}/>
        <img className="thumbnail" src={m3} onClick={() => imageClick('crying')}/>
        <img className="thumbnail" src={depressed} onClick={() => imageClick('depressed')}/>
        <img className="thumbnail" src={happy} onClick={() => imageClick('happy')}/>
        <img className="thumbnail" src={sleepy} onClick={() => imageClick('sleepy')} /> */}
      
     
      <h1>{this.state.current_mood}</h1>
      </div>
    );
  }
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
