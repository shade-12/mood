import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../styles/fight.scss'

import { Link } from 'react-router-dom';

import m1 from '../../images/monster1.png';
import m2 from '../../images/monster2.png';
import m3 from '../../images/monster3.png';
import m4 from '../../images/monster4.png';
import m5 from '../../images/monster5.png';
import m6 from '../../images/monster6.png';

class Fight extends React.Component{

  state = { theme: null }
  
  chooseTheme = (theme, evt) => {
    evt.preventDefault();
    if (theme.toLowerCase() === 'reset') { theme = null }
    this.setState({ theme });
  }
  
  randomTask() {
    const messages = ["Enter a word describing your current mood", 
                      "Think of something positive about yourself", 
                      "Write down something you are grateful for", 
                      "Write down the one thing you want to focus most on now", 
                      "Go outside and get some excersize and briefly describe what you did and how it felt", 
                      "Eat a healthy meal and describe what you ate and how it felt", 
                      "Do something for someone else and describe what you did and how it felt", 
                      "Go to bed on time and describe what time you fell asleep and how you felt in the morning"];
    const random = Math.ceil((Math.random()*messages.length)) - 1;
    return messages[random];
  }

  randomMonster() {
    const monsters = [m1, m2, m3, m4, m5, m6];

  }

  render() {
  
    const { theme } = this.state;
    const themeClass = theme ? theme.toLowerCase() : 'default';
    
    const parentContainerStyles = {
      position: 'absolute',
      height: '100%',
      width: '100%',
      display: 'table'
    };
    
    const subContainerStyles = {
      position: 'relative',
      height: '100%',
      width: '100%',
      display: 'table-cell',
      verticalAlign: 'middle'
    };

    const imageClick = (mood) => {
      console.log(mood);
      this.setState({current_mood: mood});
    } 
    
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Complete the task to defeat the monster!</Form.Label>
          <img className="thumbnail" src={m2} onClick={() => imageClick('m2')}/>
          <div className="randomTask" > { this.randomTask() } </div>
          <Form.Control/>
        </Form.Group>
        <Link to='/mymood'>
          <Button className="fight-buttons" variant="primary" type="submit">
            Submit
          </Button>
          <Button className="fight-buttons" variant="primary" type="pass">
            Pass
          </Button>
        </Link>
      </Form>
    );
  }
  
}

export default Fight;
