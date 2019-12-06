import React from 'react';

 const Band = props => {
    console.log(props)
    console.log(props.band.name)
    return (
      <div>
        <li>{props.band.name}<button onClick={() => props.deleteBand(props.band.id)}>Delete</button></li>
      </div>
    );
  }

  export default Band;
