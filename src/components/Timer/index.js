import React from 'react';

import TimerCount from './Timer';

class Timer extends React.Component {
  render() {
    return(
      <div className="timer">
        <h4>Challenge text</h4>
        <h3 className="timer__counter">
          <TimerCount 
            prepTime={5}
            testTime={120}
            startTest={this.props.startTest}
            stopTest={this.props.stopTest}
            increaseTimerCount={this.props.increaseTimerCount}
          />
        </h3>
      </div>
    );
  }
}

export default Timer;
