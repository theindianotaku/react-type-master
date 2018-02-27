import React from 'react';

import TimerCount from './Timer';

class Timer extends React.Component {
  stopTest = () => {
    this.props.stopTest();
  }

  handleTestTimerStop = () => {
    this.stopTest();
  }

  increaseTimerCount = () => {
    this.props.increaseTimerCount();
  }

  render() {
    return(
      <div className="timer">
        <h3 >Challenge text</h3>
        <span className="timer__counter">
          <TimerCount 
            prepTime={5}
            testTime={120}
            handleTestTimerStop={this.props.stopTest}
            increaseTimerCount={this.increaseTimerCount}
          />
        </span>
      </div>
    );
  }
}

export default Timer;
