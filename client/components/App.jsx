import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	// *** React's lifecycle methods ***

	componentWillMount() {

	}

	componentDidMount() {

	}

	componentWillReceiveProps(nextProps) {

	}

	shouldComponentUpdate(nextProps, nextState) {

	}

	componentWillUpdate() {

	}

	componentDidUpdate() {

	}

	componentWillUnmount() {

	}

	// *** End of lifecycle methods ***

	render() {
		return (
			<div style={{fontSize: "30px"}}>
			  <p>Hello World!</p>
			  <p>Thanks for cloning the React boilerplate with Node and Express!</p>
			  <p>--Replace the text within this div with your content--</p>
			</div>
		)
	}
}

export default App