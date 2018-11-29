import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter, Link } from 'react-router-dom';

// import App from '../containers/App';
import Home from '../containers/Home';
import List from '../containers/List';
import Detail from '../containers/Detail';
import NotFound from '../containers/NotFound';

export default class RouterMap extends Component {
	updateHandle() {
		console.log(`router变化`);
	}
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={Home} />
					{/* <Switch> */}
						<Route exact path="/list" component={List} />
						<Route exact path="/detail/:id" component={Detail} />
						{/* <Route component={NotFound} /> */}
					{/* </Switch> */}
				</div>
			</Router>
		);
	}
}
