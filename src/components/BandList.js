import React from "react";
import Band from "./Band";

class BandList extends React.Component {

    renderBands = () => {
        console.log(this.props)
        return this.props.bands.map(band => <Band deleteBand={this.props.deleteBand} key={band.id} band={band}/>)
    }
    

    render() {
        console.log()
        return (
            <div>
                Band Component
                {this.renderBands()}
            </div>

        )
    }
}

export default BandList