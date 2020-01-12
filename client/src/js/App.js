import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import axios from 'axios';
import NavBar from './Components/_navbar.js';
import LoginPage from './Components/LoginPage.js';
import UserPage from './Components/UserPage.js';
import Fight from './Components/Fight.js';
import MoodEnterPage from './Components/MoodEnterPage.js';

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    const { cookies } = props;
  }

  render() {
    let login = null;
    if(this.props.cookies.get('mood_user')){
      login = <Route render={() => <Redirect to="/mood" />} />;
    }else{
      login = <Route render={() => <Redirect to="/" />} />;
    }

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact path="/"
              render={() => <LoginPage cookies={this.props.cookies} />}
            />
            <Route
              exact path="/mood"
              render={() => <Fight cookies={this.props.cookies} />}
            />
            {<Route
              exact path="/users/:id"
              render={() => <UserPage cookies={this.props.cookies} />}
            />}
            {login}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default withCookies(App);

