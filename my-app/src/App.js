import React from "react";

import "./App.css";
import Greet from "./component/appPage";
import Navbar from "./component/Navbar";
import Message from "./component/message";
import Counter from "./component/Counter";

class App extends React.Component {
	render() {
		return (
			<div class="header" className="App">
				<Navbar />
				<Message></Message>
				<Counter></Counter>

				<Greet name="Laa" heroName="Batman">
					<p>This is childern props</p>
				</Greet>
				<Greet name="Lii" heroName="Wonder woman">
					<button> fly away!</button>
				</Greet>
				<Greet name="Luu" heroName="Iron Man" />
			</div>
		);
	}
}

export default App;
