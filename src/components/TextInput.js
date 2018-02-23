import React, { Component } from 'react';

class TextInput extends Component {
  state = {
    value: ''
  }

  handleChange = (e) => {
    e.preventDefault();

    const value = e.target.value;
    this.setState(() => ({ value }));
  }

  render () {

    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  };
}

export default TextInput;
