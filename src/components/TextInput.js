import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

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
        <Input 
          focus
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='Search...' 
        />
      </div>
    );
  }
}

export default TextInput;
