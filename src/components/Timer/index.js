import React from 'react';

import TimerCount from './Timer';

class Timer extends React.Component {
  render() {
    return(
      <div className="timer">
        <h3 >Challenge text</h3>
        <span className="timer__counter">
          <TimerCount 
            prepTime={5}
            testTime={120}
            startTest={this.props.startTest}
            stopTest={this.props.stopTest}
            increaseTimerCount={this.props.increaseTimerCount}
          />
        </span>
      </div>
    );
  }
}

export default Timer;
