import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import axios from 'axios';
import NavBar from './Components/_navbar.js';
import LoginPage from './Components/LoginPage.js';
import UserPage from './Components/UserPage.js';

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      current_user: {}
    }
  }

  componentDidUpdate(prevState) {
    if (this.state != prevState) {
      console.log(this.state);
    }
  }

  updateCurrentUser = async user => {
    await this.setState({ user: user });
  }

  render() {
    let login = null;
    if(this.state.current_user !== {}){
      login = <Route render={() => <Redirect to={`/users/${this.state.current_user.id}`} />} />;
    }else{
      login = <Route render={() => <Redirect to="/" />} />;
    }

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact path="/"
              render={() => <LoginPage cookies={this.props.cookies} updateCurrentUser={this.updateCurrentUser}/>}
            />
            <Route
              exact path="/mood"
              render={() => <UserPage cookies={this.props.cookies} />}
            />
            {/*<Route
              exact path="/users/:id"
              render={() => <UserPage cookies={this.props.cookies}/>}
            />*/}
            {login}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default withCookies(App);
