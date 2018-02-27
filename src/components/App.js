import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider } from 'semantic-ui-react';
import { history } from '../routers/AppRouter';

import fetchTargetText from '../thunks/fetchTargetText';
import { setTimeElapsed } from '../actions/results';
import { incrementWordCount, completeTest } from '../actions/progressCount';

import TargetText from './TargetText';
import TextInput from './TextInput';
import Timer from './Timer';
import Results from './Results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerCount: 0
    };
  }

  increaseTimerCount = () => {
    const timerCount = this.state.timerCount + 1;
    this.setState(() => ({ timerCount }));
  }

  stopTest = () => {
    this.props.completeTest();
    history.push('/results');
  }

  incrementWordCount = () => {
    this.props.incrementWordCount();
    this.props.setTimeElapsed(this.state.timerCount);
  }

  componentWillMount = () => {
    if (this.props.testStatus !== 'IN_PROGRESS') {
      history.push('/');
    }
  }

  componentDidMount = () => {
    this.props.fetchTargetText();
    this.setState(() => ({testStatus: 'started'}));
  }

  render() {
    return (
      <div className="App">
        <div className="test-area">
          <Timer 
            increaseTimerCount={this.increaseTimerCount}
            stopTest={this.stopTest}
          />
          <Divider />
          <div className="target-area">
            <TargetText />
          </div>
          <Divider />
          {this.state.testStatus === 'started' &&
            <TextInput
              stopTest={this.stopTest}
              incrementWordCount={this.incrementWordCount}
            />
          }
        </div>
        <Results results={this.props.results} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  results: state.results,
  testStatus: state.progress.testStatus
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTargetText: () => dispatch(fetchTargetText()),
    incrementWordCount: () => dispatch(incrementWordCount()),
    setTimeElapsed: (timeElapsed) => dispatch(setTimeElapsed(timeElapsed)),
    completeTest: () => dispatch(completeTest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
