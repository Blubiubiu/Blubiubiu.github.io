/**
 * @desc 路由页面
 * @author lsy
 * @todo xxx
 */

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { recursion } from '@/assets/js/utils'
import routeLink from './router';

let routerArr = [];

export default class RouterMap extends Component {
	render() {
		return (
			<Switch>
				{recursion(routeLink, routerArr).map((item) => {
					if (item.path) {
						return <Route exact key={item.path} path={item.path} component={item.component}/>
					} else {
						return <Route component={item.component} />;
					}
				})}
			</Switch>
		);
	}
}
