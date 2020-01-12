import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// import { instanceOf } from 'prop-types';
import { withCookies } from 'react-cookie';
import Cookies from 'universal-cookie';
import axios from 'axios';
import NavBar from './Components/_navbar.js';
import LoginPage from './Components/LoginPage.js';
import MyMood from './Components/MyMood.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  async componentDidMount() {
    const cookies = new Cookies();
    cookies.set('mood_user', '', { path: '/', expires: 0 });
    this.setState({user: cookies.get('mood_user')});
  }

  render() {
    let login = null;
    if(this.state.user !== ''){
      login = <Route render={() => <Redirect to={`/users/${this.state.user.id}`} />} />;
    }else{
      login = <Route render={() => <Redirect to="/" />} />;
    }

    return (
      <Router>
        <div className="App">
            <Route
              exact path="/"
              render={() => <LoginPage user={this.state.user} />}
            />
            <Route
              exact path="/mood"
              render={() => <MyMood user={this.state.user} />}
            />
            {/*<Route
              exact path="/users/:id"
              render={() => <UserPage cookies={this.props.cookies}/>}
            />*/}
            {login}
        </div>
      </Router>
    );
  }
}

export default withCookies(App);
