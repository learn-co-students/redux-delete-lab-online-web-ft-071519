import React, { Component } from 'react';

class Band extends Component {
  handleOnClick = () => {
    this.props.deleteBand(this.props.id);
  }

  render() {
    return(
      <li>
      {this.props.name} <button onClick={this.handleOnClick}>Delete</button>
      </li>
    );
  }
};

export default Band;
