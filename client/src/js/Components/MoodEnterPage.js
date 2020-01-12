import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class MoodEnterPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mood: '',
        }
    }

    onSubmit = response => {
        alert(this.state.mood);
    }

    onChange = e => {
        const target = e.target;
        if (target.type === 'text') {
            this.setState({ mood: target.value });
        }
    }

    render() {
        return (
            <div className="MoodEnter">
                <h1>How are you feeling?</h1>
                <br /><br /><br /><br /><br /><br />
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlID="formMood">
                        <Form.Control type="text" placeholder="" onChange={this.onChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
        );
    }
}

export default MoodEnterPage;
