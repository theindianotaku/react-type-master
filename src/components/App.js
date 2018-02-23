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
        <TargetText textArray={this.props.textArray} />
        <TextInput />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    textArray: state.target.textArray
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTargetText: () => dispatch(fetchTargetText())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
