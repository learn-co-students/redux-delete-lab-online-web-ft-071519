import React, { Component } from 'react';

const Band = props => {
  debugger

  return (

    <div>
      <ul>
        <li>{props.band.name}</li><button onClick={() => props.delete(props.band.id)}>DELETE</button>
      </ul>
    </div>
  );

};

export default Band;
