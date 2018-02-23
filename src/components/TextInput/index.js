import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react';

class TextInput extends Component {
  state = {
    value: '',
    isError: false,
  }

  handleChange = (e) => {
    e.preventDefault();

    const value = e.target.value;
    this.setState(() => ({ value }));
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

export default connect(mapStateToProps)(TextInput);
