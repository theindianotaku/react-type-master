import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react';

import { setErrorCharCount, setSuccessCharCount } from '../../actions/progressCount';

class TextInput extends Component {
  state = {
    value: '',
    isError: false,
  }

  checkIfSuccess = (value) => {
    const targetWord = this.props.textArray[this.props.progress.wordCount];
    console.log(targetWord);
    let isError = false;
    let charCount = 0;
    let errorCharCount = 0;
    for (let i = 0; i < value.length; i++) {
      if (!isError) {
        if (targetWord[i] === value[i]) {
          charCount++;
        } else {
          isError = true;
          errorCharCount++;
        }
      } else {
        errorCharCount++;
      }
    }

    console.log(charCount, ' ', errorCharCount);
    this.props.setErrorCharCount(errorCharCount);
    this.props.setSuccessCharCount(charCount);
  }

  handleChange = (e) => {
    e.preventDefault();

    const value = e.target.value;
    this.setState(() => ({ value }));

    this.checkIfSuccess(value);
  }

  render () {
    return (
      <div>
        <Input
          error={this.state.isError}
          focus fluid
          size='huge'
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='type it as quick as possible'
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    textArray: state.target.textArray,
    progress : state.progress
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setErrorCharCount: (count) => dispatch(setErrorCharCount(count)),
    setSuccessCharCount: (count) => dispatch(setSuccessCharCount(count))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);
