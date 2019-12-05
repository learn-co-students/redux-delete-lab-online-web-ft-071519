import React, { Component } from 'react';
import Band from "./Band.js"

class Bands extends Component {

  render() {
    return(
      <div>
        {this.props.bands.map(band => <Band {...band} delete={this.props.delete} key={band.id} band={band}/>)}
      </div>
    );
  }
};

export default Bands;