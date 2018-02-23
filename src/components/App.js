import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchTargetText from '../thunks/fetchTargetText';
import TargetText from './TargetText';
import TextInput from './TextInput';

class App extends Component {
  componentDidMount = () => {
    this.props.fetchTargetText();
  }

  render() {
    return (
      <div className="App">
        <TargetText />
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
