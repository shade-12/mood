import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router-dom';
import NavBar from './_navbar.js';

class MoodEnterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mood: '',
            current_user: {},
            redirectToUserPage: false
        }
    }

    async componentDidMount() {
        let user_id = this.props.cookies.get('mood_user');
        await axios.get(`/api/users/${user_id}`).then(response => {
          this.setState({current_user: response.data.user});
        });
    }

    onSubmit = e => {
        e.preventDefault();
        alert(this.state.mood);
        this.setState({ redirectToUserPage: true });
    }

    onChange = e => {
        const target = e.target;
        if (target.type === 'text') {
            this.setState({ mood: target.value });
        }
    }

    render() {
        const {cookies} = this.props;

        if (this.state.redirectToUserPage) {
            return <Redirect to={`/users/${cookies.get('mood_user')}`} />;
        }

        return (
            <div className="MoodEnter">
                <NavBar name={this.state.current_user.name}/>
                <h1>How are you feeling?</h1>
                <br /><br /><br /><br /><br /><br />
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlid="formMood">
                        <Form.Control type="text" placeholder="" onChange={this.onChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
        );
    }
}

export default MoodEnterPage;
