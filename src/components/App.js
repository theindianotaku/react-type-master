import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider } from 'semantic-ui-react';

import fetchTargetText from '../thunks/fetchTargetText';
import { setTimeTaken } from '../actions/results';
import { incrementWordCount } from '../actions/progressCount';

import TargetText from './TargetText';
import TextInput from './TextInput';
import Timer from './Timer';
import Results from './Results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testStatus: 'stopped'
    };
  }

  stopTest = () => {
    this.setTestStatus('stopped');
  }

  beginTest = () => {

  }

  setTestStatus = (status) => {
    this.setState(() => ({testStatus : status}));
  }

  incrementWordCount = () => {
    this.props.incrementWordCount();
  }

  componentDidMount = () => {
    this.props.fetchTargetText();
    this.setState(() => ({testStatus: 'started'}));
  }

  render() {
    return (
      <div className="App">
        <div className="test-area">
          <Timer />
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
        {/* <Results results={this.props.results} /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  results: state.results
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTargetText: () => dispatch(fetchTargetText()),
    incrementWordCount: () => dispatch(incrementWordCount()),
    setTimeTaken: (timeTaken) => dispatch(setTimeTaken(timeTaken)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
