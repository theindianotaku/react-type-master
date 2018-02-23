import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

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
        <span>
          {this.props.targetText ? this.props.targetText.join(' ') : ''}
        </span>
      </Header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hasErrored: state.target.hasErrored,
    isLoading: state.target.isLoading,
    targetText: state.target.textArray,
    progress : state.progress
  };
};

export default connect(mapStateToProps)(TargetText);
