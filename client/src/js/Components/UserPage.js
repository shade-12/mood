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
import ProgressBar from 'react-bootstrap/ProgressBar';

import axios from 'axios';
import NavBar from './_navbar.js';
import PopUp from './_popup.js'
import Menu from './_menu.js'
import Image from 'react-bootstrap/Image'
import avatar from '../../images/sword.jpg';
import heart from '../../images/heart.png';
import hp from '../../images/hp.gif';
import m1 from '../../images/monster1.png';
import m2 from '../../images/monster2.png';
import m3 from '../../images/monster3.png';
import m4 from '../../images/monster4.png';
import m5 from '../../images/monster5.png';
import m6 from '../../images/monster6.png';

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
        </div>
      </div>
    );
  }
}

export default UserPage;
