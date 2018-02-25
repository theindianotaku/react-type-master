import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react';

import { setErrorCharCount, setSuccessCharCount, incrementWordCount } from '../../actions/progressCount';

// import { history } from '../../routers/AppRouter';

class TextInput extends Component {
  state = {
    value: '',
    isError: false,
    isDisabled: false
  }

  increaseWordCount = () => {
    this.setState(() => ({value: ''}));
    this.props.incrementWordCount();
  }

  stopTest = () => {
    this.setState(() => ({
      value: '',
      isError: false,
      isDisabled: true
    }));
    // history.push('/results');
  }

  checkIfSuccess = (value) => {
    const targetWordCount = this.props.textArray.length;
    const targetWord = this.props.textArray[this.props.progress.wordCount];
    let isError = false;
    let wordCount = this.props.progress.wordCount;
    let charCount = 0;
    let errorCharCount = 0;

    const setCount = (i) => {
      if (!isError) {
        if (targetWord[i] === value[i]) {
          isError = false;
          this.setState(() => ({isError: false}));
          charCount++;
        } else {
          isError = true;
          this.setState(() => ({isError: true}));
          errorCharCount++;
        }
      } else {
        errorCharCount++;
      }
    };

    if (value) {
      for (let i = 0; i < value.length; i++) {
        if ( i < targetWord.length || i > targetWord.length) {
          setCount(i);
        } else if ( i === targetWord.length) {
          if (value[i] === ' ' && !isError) {
            wordCount = wordCount + 1;
            this.increaseWordCount();
            errorCharCount = 0;
            charCount = 0;
          } else {
            setCount(i);
          }
        }
      }
    } else {
      this.setState(() => ({isError: false}));
    }

    if (wordCount === targetWordCount) {
      this.stopTest();
    }

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
          disabled={this.state.isDisabled}
          fluid
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
    setSuccessCharCount: (count) => dispatch(setSuccessCharCount(count)),
    incrementWordCount: () => dispatch(incrementWordCount())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);
