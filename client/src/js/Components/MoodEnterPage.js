import React, { Component } from 'react';
import { getMusic } from './MusicAPI';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



class MoodEnterPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mood: '',
            //Move to app.js
            audio: '',
        }
    }

    onSubmit = response => {
        //alert(this.state.mood);
        let currentMood = this.state.mood;

        const _this = this.state.mood;
        const promise = new Promise(function (resolve, reject) {
            //audio = getMusic(currentMood);
            console.log("hello");
            setTimeout(function () {
                let audio = getMusic(currentMood);
                resolve(audio);
            }, 300)
        });
        promise.then(result => {
            console.log("this works:" + result);
            //_this.setState({audio : result});
        })
        // promise.then(function (value) {
        //     this.state.audio = value;
        // })

        // console.log(this.state.mood + "hfkdsaf");
        // console.log(getMusic(this.state.mood));

        //this.state.audio = getMusic(this.state.mood);
        //console.log(this.state.audio);
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
                <br></br><br /><br /><br /><br /><br />
                <h2>How are you feeling today?</h2>
                <br /><br />
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlID="formMood">
                        <Form.Control type="text" placeholder="" onChange={this.onChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
                <br /><br /><br /><br /><br /><br />
                <figure>
                    <figcaption>Listen to Your Custom Music:</figcaption>
                    <audio
                        controls
                        src={this.state.audio}>
                        Your browser does not support the<code>audio</code> element.
                    </audio>
                </figure>
            </div>
        );
    }
}

export default MoodEnterPage;
