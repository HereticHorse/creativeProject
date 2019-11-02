import React from "react";
import "../../src/App.css";

const Greet = (props) => {
	console.log(props);
	return (
		<div>
			<h1>
				Hello {props.name} {props.heroName}
			</h1>
			<p>{props.children}</p>
		</div>
	);
};
export default Greet;
