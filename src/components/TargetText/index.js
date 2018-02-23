import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

import TextWrapper from './TextWrapper';

class TargetText extends Component {
  state = {
    text: ''
  }

  render () {
    if (this.props.hasErrored) {
      return <span>Sorry! There was an error loading the items</span>;
    }

    if (this.props.isLoading) {
      return <span>Loading challenge text..</span>;
    }

    return (
      <Header as='h1'>
        {this.props.textArray ? <TextWrapper textArray={this.props.textArray} progress={this.props.progress} /> : null}
      </Header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hasErrored: state.target.hasErrored,
    isLoading: state.target.isLoading,
    textArray: state.target.textArray,
    progress : state.progress
  };
};

export default connect(mapStateToProps)(TargetText);
