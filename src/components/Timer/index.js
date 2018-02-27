import React from 'react';

import TimerCount from './Timer';

class Timer extends React.Component {

  handleTestTimerStop = () => {
    console.log('your time is up');
  }

  render() {
    return(
      <div className="timer">
        <h3 >Challenge text</h3>
        <span className="timer__counter">
          <TimerCount 
            prepTime={5}
            testTime={120}
            handleTestTimerStop={this.handleTestTimerStop}
          />
        </span>
      </div>
    );
  }
}

export default Timer;
