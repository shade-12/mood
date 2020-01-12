import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

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

  onSubmit = response => {

    let user = {
                name: this.state.username,
                password: this.state.password,
                area_id: this.state.area.id
              };

    axios.post('/api/users', user)
         .then(response => {
          this.setState({
            current_user: response.data.user,
            logged_in: true
          });
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
    if(this.state.logged_in) {
      return <Redirect to={`/users/${this.state.current_user.id}`} />
    }

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
