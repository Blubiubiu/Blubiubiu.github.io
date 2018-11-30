import React, { Component } from 'react';
import './style.css';

import Header from '../../components/Header'
import RouterMap from '../../router/routerMap'


class App extends Component {
	render() {
		return (
			<div className="App">
				<Header/>
				<RouterMap/>
			</div>
		)
	}
	componentDidMount () {
		console.log(1, this)
	}
	componentDidUpdate () {
		console.log(2, this)
	}
}

export default App;
