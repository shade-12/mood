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
      current_user: null
    };
  }

  onSubmit = response => {
    let user = {
      name: this.state.username,
      password: this.state.password
    }
    axios.post('/api/users', user).then(response => {
      let user = response.data.user;
      this.setState({current_user: user});
      console.log(user);
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
        {this.state.current_user}
      </Form>
    );
  }

}

export default LoginPage;
