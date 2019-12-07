import React, { Component } from 'react';

class BandInput extends Component {

	state = {
		bandName: ''
	}

	handleOnChange(event) {
		this.setState({
			bandName: event.target.value,
		});
	}

	handleOnSubmit(event) {
		event.preventDefault();
		this.props.addBand(this.state.bandName);
		this.setState({
			bandName: '',
		});
	}

	render() {
		return (
			<div>
				<h3>Add a Band:</h3>
				<form onSubmit={(event) => this.handleOnSubmit(event)}>
					<input
						placeholder="insert band name"
						type="text"
						value={this.state.bandName}
						onChange={(event) => this.handleOnChange(event)} />
					<input type="submit" />
				</form>
			</div>
		);
	}
};

export default BandInput;
