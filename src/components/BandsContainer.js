import React, { Component } from 'react'
import BandInput from './BandInput';
import BandList from "./BandList"

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <BandList bands={this.props.bands} deleteBand={this.props.deleteBand} />
     </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({type: "DELETE_BAND", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
