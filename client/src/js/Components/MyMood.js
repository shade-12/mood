import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Carousel from 'react-bootstrap/Carousel'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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

class MyMood extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      current_mood: ''
    };
  }

  render() {

    const imageClick = (mood) => {
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

        <section className="container">
          <div className="one">
            <Image src={userIcon} roundedCircle id = "userIcon"/>
          </div>
          <div className="two">
           <h4> UserName</h4>
           <h5> Heart</h5>
           <h5> Level</h5>
          </div>
        </section>
        <br></br>
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Close Friends
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<br></br>
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Hobbies
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<br></br>

<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Monsters Defeated
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<Carousel>
  <Carousel.Item className = "carouselItem">
    <img src = {m1}/>


    <Carousel.Caption>
      <div className = "dino-text">
      <h3>Dino-ster</h3>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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

export default MyMood;
