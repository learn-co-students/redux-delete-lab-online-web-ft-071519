import React, { Component } from 'react';

class Band extends Component {
   
   handleClick = () => {
      console.log("handleClick", this.props)
      // debugger
      this.props.deleteBand(this.props.id)
   }

   render() {
      console.log("Band", this.props)
      return(
         <li>
            <span>{this.props.name}</span>
            <button
               onClick={this.handleClick}>
               Delete
            </button>
         </li>
      );
   }
};

export default Band;
