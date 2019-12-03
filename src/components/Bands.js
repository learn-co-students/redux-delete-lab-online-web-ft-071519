import React from 'react';
import Band from './Band';

const Bands = props => {
    const bands = props.bands.map(b => <Band {...b} />)
  
    return (
        <ul>
        {bands}
        </ul>
    );
  
  };

export default Bands;