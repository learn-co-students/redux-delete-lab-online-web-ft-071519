import React from 'react';
import Band from './Band';

const Bands = props => {
    const bands = props.bands.map(b => <Band name={b.name} id={b.id} deleteBand={props.deleteBand} />)
  
    return (
        <ul>
        {bands}
        </ul>
    );
  
  };

export default Bands;