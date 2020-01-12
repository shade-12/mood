import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import axios from 'axios';
import NavBar from './Components/_navbar.js';
import LoginPage from './Components/LoginPage.js';
import MyMood from './Components/MyMood.js';

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  render() {
    let login = null;
    if(this.props.cookies.get('mood_user')){
      login = <Route render={() => <Redirect to={`/users/${this.props.cookies.get('mood_user')}`} />} />;
    }else{
      login = <Route render={() => <Redirect to="/" />} />;
    }

    return (
      <Router>
        <div className="App">
            <Route
              exact path="/"
              render={() => <LoginPage cookies={this.props.cookies} />}
            />
            <Route
              exact path="/mood"
              render={() => <MyMood cookies={this.props.cookies} />}
            />
            <Route
              exact path="/users/:id"
              render={() => <UserPage cookies={this.props.cookies}/>}
            />
            {login}
        </div>
      </Router>
    );
  }
}

export default withCookies(App);
