import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './Components/_navbar.js';
import MoodEnterPage from './Components/MoodEnterPage.js'

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
      message: 'Click the button to load data!'
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
        <div className="thumbnail-container">
          <MoodEnterPage />
        </div>
      </div>
    );
  }
}

export default App;
