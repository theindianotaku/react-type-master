import React from 'react';

class TimerCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: {}, seconds: props.prepTime, isPrep: true };
    this.timer = 0;
    this.testTime = props.testTime;
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      'h': hours,
      'm': minutes,
      's': seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.startTimer();
  }

  startTimer = () => {
    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown = () => {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
      if (this.state.isPrep) {
        this.timer = 0;
        let timeLeftVar = this.secondsToTime(this.testTime);
        this.setState({ time: timeLeftVar, seconds: this.testTime, isPrep: false });
        this.startTimer();
      } else {
        this.props.handleTestTimerStop();
      }
    }
  }

  render() {
    return(
      <span>
        <strong>{this.state.time.m}</strong>m <strong>{this.state.time.s}</strong>s
      </span>
    );
  }
}

export default TimerCount;
