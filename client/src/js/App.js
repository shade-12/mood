import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './Components/_navbar.js';
import LoginPage from './Components/LoginPage.js';
import MyMood from './Components/MyMood.js';
import ReactDOM from 'react-dom';
import Fight from './Components/Fight.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


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
      <Router>
        <div className="MyMood">
          <NavBar />
          <Switch>
            <Route path="/fight" component={Fight} />
            <Route path="/mymood" component={MyMood} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;
