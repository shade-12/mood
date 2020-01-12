import React from 'react';
import angry from '../../images/angry.jpg';
import confused from '../../images/confused.jpg';
import crying from '../../images/crying.jpg';
import depressed  from '../../images/depressed.jpg';
import happy from '../../images/happy.jpg';
import sleepy from '../../images/sleepy.jpg';

class MyMood extends React.Component{

  state = { theme: null }

  constructor(props) {
    super(props);
    this.state = {
      current_mood: '',
    };
  }

  chooseTheme = (theme, evt) => {
    evt.preventDefault();
    if (theme.toLowerCase() === 'reset') { theme = null }
    this.setState({ theme });
  }

  render() {

    const imageClick = (mood) => {
      console.log(mood);
      this.setState({current_mood: mood});
    }


    return (
        <div>
          <h1> How Are You Feeling?</h1>
        <div className="thumbnail-container">
        <img className="thumbnail" src={angry} onClick={() => imageClick('angry')}/>
        <img className="thumbnail" src={confused} onClick={() => imageClick('confused')}/>
        <img className="thumbnail" src={crying} onClick={() => imageClick('crying')}/>
        <img className="thumbnail" src={depressed} onClick={() => imageClick('depressed')}/>
        <img className="thumbnail" src={happy} onClick={() => imageClick('happy')}/>
        <img className="thumbnail" src={sleepy} onClick={() => imageClick('sleepy')} />
        {/*  <img className="thumbnail" src={crying} />
        <img className="thumbnail" src={depressed} />
        <img className="thumbnail" src={happy} />
        <img className="thumbnail" src={impatient} />
        <img className="thumbnail" src={naughty} />
        <img className="thumbnail" src={sleepy} />
        <img className="thumbnail" src={smile} />
        <img className="thumbnail" src={terrified} /> */}
      </div>
      <h1>{this.state.current_mood}</h1>
      </div>
    );
  }
}

export default MyMood;
