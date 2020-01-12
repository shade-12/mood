import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Banner from './_banner.js';

class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      area: {},
      current_user: {},
      logged_in: false
    };
  }

  async componentDidMount() {
    await this.getArea();
  }

  getArea = async () => {
    await axios.get('https://ipapi.co/json/').then(response => {
      let area = {
              name: response.data.city,
              latitude: response.data.latitude,
              longitude: response.data.longitude,
              image: ''
            };
      axios.post('/api/areas', area).then(response => {
        this.setState({area: response.data.area });
        console.log(this.state.area);
      });

    });
  }

  onSubmit = e => {
    e.preventDefault();
    let user = {
      name: this.state.username,
      password: this.state.password,
      area_id: this.state.area.id
    };

    const {cookies} = this.props;

    axios.post('/api/users', user)
         .then(response => {
          console.log(response.data.user.id);
            cookies.set('mood_user', response.data.user.id, { path: '/' });
            this.props.updateCurrentUser(response.data.user);
            this.setState({
              current_user: response.data.user
            });
          }).then(response => this.setState({logged_in: true}))
         .catch(error => {
            console.log(error);
          });
  }

  onChange = e => {
    const target = e.target;

    if (target.type === 'text') {
      this.setState({ username: target.value });
    }
    if (target.type === 'password') {
      this.setState({ password: target.value });
    }
  }

  render() {
    if(this.state.logged_in === true) {
      return <Redirect to="/mood" />
    }

    return (
      <div className="login">
        <h2>Welcome to M∞d :|</h2>
        <Banner />
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Username" onChange={this.onChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" onChange={this.onChange}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Get in!
          </Button>
        </Form>
      </div>
    );
  }

}

export default LoginPage;
