import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      area: '',
      current_user: {}
    };
  }

  onSubmit = response => {
    let user = {
      name: this.state.username,
      password: this.state.password
    }



    axios.get('https://ipapi.co/json/')
         .then(response => {
            let data = response.data;
            let area = {
              name: data.city,
              latitude: data.latitude,
              longitude: data.longitude,
              image: ''
            };
            axios.get('/api/areas', area).then(response => {
              this.setState({area: response.})
            })
          .catch(error => {
            console.log(error);
          });

    axios.post('/api/users', user)
         .then(response => {
            let user = response.data.user;
            this.setState({current_user: user});
            console.log(user);
          })
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

    const user = this.state.current_user !== null ? this.state.current_user : '';

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Username" onChange={this.onChange}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" onChange={this.onChange}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }

}

export default LoginPage;
