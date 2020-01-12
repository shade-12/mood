import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import confused from '../../images/confused.jpg';
import '../../styles/fight.scss'

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
    console.log(random);
    return messages[random];
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
    <img className="thumbnail" src={confused} onClick={() => imageClick('confused')}/>
    <div className="randomTask" > { this.randomTask() } </div>
    <Form.Control type="email"/>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    );
  }
  
}

export default Fight;
