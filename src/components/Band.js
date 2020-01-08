
import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    return (
    this.props.delete(this.props.id))
  }

  render() {
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={this.handleOnClick}>Gwar</button>
      </div>
    );
  }
};

export default Band;
