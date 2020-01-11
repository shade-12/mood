import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './Components/_navbar.js';
import LoginPage from './Components/LoginPage.js';

import ReactDOM from 'react-dom';

var angry = require('../images/angry.jpg');
var confused = require('../images/confused.jpg');
var crying = require('../images/crying.jpg');
var depressed = require('../images/depressed.jpg');
var happy = require('../images/happy.jpg');
var impatient = require('../images/impatient.jpg');
var naughty = require('../images/naughty.jpg');
var sleepy = require('../images/sleepy.jpg');
var smile = require('../images/smile.jpg');
var terrified = require('../images/terrified.jpg');


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      isLoginOpen: true,
      isRegisterOpen: false
    }
  }


  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    })
  }



  render() {
    return (
      <div className="App">
        <NavBar/>
        <h1> Hello World</h1>
        <div className="box-container">
          <LoginPage/>
       </div>

        {/* <div className="thumbnail-container">
          <img className="thumbnail" src={angry} />
          <img className="thumbnail" src={confused} />
          <img className="thumbnail" src={crying} />
          <img className="thumbnail" src={depressed} />
          <img className="thumbnail" src={happy} />
          <img className="thumbnail" src={impatient} />
          <img className="thumbnail" src={naughty} />
          <img className="thumbnail" src={sleepy} />
          <img className="thumbnail" src={smile} />
          <img className="thumbnail" src={terrified} />
        </div> */}
      </div>
    );
  }
}

export default App;
