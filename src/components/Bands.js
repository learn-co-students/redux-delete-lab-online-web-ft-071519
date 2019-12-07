import React from 'react';
import Band from './Band'
import {connect} from 'react-redux'

// This is a functional component used to dig one level deeper into the bands array to extract the id.
// Props.bands is an array of band objects.
// Pass each one to the <Band> component with the props of key, and deleteBand.
// The <Band> component then returns a <li> element for each band object in the bands array. 
const Bands = props => {
    // console.log(props)
    // debugger
    const bands = props.bands.map(band => <Band key={band.id} {...band} deleteBand={props.deleteBand} />)
    
    return (
        <ul>
            {bands}
        </ul>
    )
}        
const mapDispatchToProps = (dispatch) => {
    return {
    deleteBand: id => dispatch({ type: "DELETE_BAND", id })
    }
}
const mapStateToProps = ({ bands }) => ({ bands })
export default connect(mapStateToProps, mapDispatchToProps)(Bands);

// Scrap:
// let bands = this.props.bands.map((band, index) => 
//     <band key={band.id} 