import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react';
import { checkIfValidInput } from '../../utilities';

import { setErrorCharCount, setSuccessCharCount } from '../../actions/progressCount';
import { incrementSuccessCount, incrementTotalCount } from '../../actions/results';

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
    this.props.stopTest();
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
          if((wordCount === targetWordCount - 1) && (i === targetWord.length -1) && !isError) {
            this.increaseWordCount();
            this.stopTest();
          }
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

    this.props.setErrorCharCount(errorCharCount);
    this.props.setSuccessCharCount(charCount);
  }

  handleRef = (c) => {
    this.inputRef = c;
  }

  focusInput = () => {
    this.inputRef.focus();
  }

  handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    this.setState(() => ({ value }));
    this.checkIfSuccess(value);
  }

  handleKeyUp = (e) => {
    const targetWord = this.props.textArray[this.props.progress.wordCount];
    const value = this.state.value;
    const index = value.length;

    if (checkIfValidInput(e.key) && !e.metaKey) {
      this.props.incrementTotalCount();
      if (value[index - 1] === targetWord[index - 1]) this.props.incrementSuccessCount();
    }
  }

  componentDidUpdate = () => {
    if(this.props.progress.testStatus === 'IN_PROGRESS') this.focusInput();
  }

  render () {
    return (
      <div>
        <Input
          ref={this.handleRef}
          error={this.state.isError}
          disabled={this.props.progress.testStatus === 'IN_PREP' ? true : false}
          fluid
          size='huge'
          value={this.state.value}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
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
    incrementSuccessCount: () => dispatch(incrementSuccessCount()),
    incrementTotalCount: () => dispatch(incrementTotalCount())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);
