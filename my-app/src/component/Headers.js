import React, { Component } from "react";

class Headers extends Component {
	render() {
		return (
			<div>
				<h1>
					Hello {this.props.name} {this.props.heroName}
				</h1>
			</div>
		);
	}
}
export default Headers;
