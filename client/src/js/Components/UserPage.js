import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Carousel from 'react-bootstrap/Carousel'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import {ButtonToolbar} from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'

import axios from 'axios';
import NavBar from './_navbar.js'
import Image from 'react-bootstrap/Image'
import avatar from '../../images/sword.jpg';
import heart from '../../images/heart.png';
import hp from '../../images/hp.gif';
import m1 from '../../images/monster1.png';
import m2 from '../../images/monster2.png';
import m3 from '../../images/monster3.png';

class UserPage extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      current_user: {}
    }
  }

  async componentDidMount() {
    let user_id = this.props.cookies.get('mood_user');
    await axios.get(`/api/users/${user_id}`).then(response => {
      this.setState({current_user: response.data.user});
    })
  }

  render() {

    return (
        <div>
          <NavBar name={this.state.current_user.name}/>

          <div className="user-container">
            <section className="user-card">
              <div className="avatar-container">
                <Image className="avatar" src={avatar} roundedCircle />
              </div>
              <div className="info">
               <span>
                  <img src={heart} />
                  <ProgressBar>
                    <ProgressBar striped animated variant="danger" now={20} key={3} />
                  </ProgressBar>
               </span>
               <span>
                  <img src={hp} />
                  <ProgressBar>
                    <ProgressBar striped animated variant="primary" now={50} key={3} />
                  </ProgressBar>
               </span>
              </div>
            </section>

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
        </div>
      </div>
    );
  }
}

export default UserPage;
