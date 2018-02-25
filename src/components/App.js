import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchTargetText from '../thunks/fetchTargetText';
import TargetText from './TargetText';
import TextInput from './TextInput';

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

  componentDidMount = () => {
    this.props.fetchTargetText();
  }

  render() {
    return (
      <div className="App">
        <div className="target-area">
          <TargetText
            stopTest={this.stopTest}
          />
        </div>
        <TextInput />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTargetText: () => dispatch(fetchTargetText())
  };
};

export default connect(null, mapDispatchToProps)(App);
