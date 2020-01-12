import React, { useState, Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

class PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show1: false,
      show2: false,
      show3: false,
      friend_name: ''
    }
  }

  handle1Close = () => {this.setState({show1: false})};
  handle1Show = () => {this.setState({show1: true})};
  handle2Close = () => {this.setState({show2: false})};
  handle2Show = () => {this.setState({show2: true})};
  handle3Close = () => {this.setState({show3: false})};
  handle3Show = () => {this.setState({show3: true})};

  addFriend = async (e) => {
    e.preventDefault();
    let username = this.state.friend_name;
    await axios.get(`/api/users/name/${username}`).then(r => {
            let id = r.data.user.id;
            let user = {user_id: this.props.currentuser.id,
                        user_id_2: id};
            axios.post('/api/closefriends', user).then(
              response => { console.log("Added!")
            }).catch(error => {
                  console.log(error);
                });
    })

  }

  onChange = e => {
      this.setState({ friend_name: e.target.value });
  }

  render() {

    const closefriends = this.props.closefriends.map(f => (
      <ListGroup.Item key={f.id}>{f.name}</ListGroup.Item>
    ));

    return (
      <>
        <Button className="modal-button" variant="secondary" onClick={this.handle1Show}>
          Close Friends
        </Button>

        <Modal show={this.state.show1} onHide={this.handle1Close}>
          <Modal.Header closeButton>
            <Modal.Title>Close Friends</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup variant="flush">
              {closefriends}
            </ListGroup>
          </Modal.Body>
          <Form onSubmit={this.addFriend}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="My friend" onChange={this.onChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Add!
            </Button>
          </Form>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handle1Close}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Add Friend
            </Button>
          </Modal.Footer>
        </Modal>

        <Button className="modal-button" variant="secondary" onClick={this.handle2Show}>
          Hobbies
        </Button>

        <Modal show={this.state.show2} onHide={this.handle2Close}>
          <Modal.Header closeButton>
            <Modal.Title>Hobbies</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handle2Close}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Button className="modal-button" variant="secondary" onClick={this.handle3Show}>
          Monsters Defeated
        </Button>

        <Modal show={this.state.show3} onHide={this.handle3Close}>
          <Modal.Header closeButton>
            <Modal.Title>Monsters Defeated</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handle3Close}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
     );
   }

}

export default PopUp;
