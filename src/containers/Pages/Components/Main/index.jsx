/**
 * @desc 主页面
 * @author lsy
 * @todo xxx
 */

import React, { Component } from 'react';
import { Layout } from 'element-react';

import SideMenu from './SideMenu';
import BreadCrumb from './BreadCrumb'

import './style.scss';

class Main extends Component {
	render() {
		return (
			<Layout.Row className="admin__main__container">
				<Layout.Col style={{width: '300px', height: '100%'}}>
					<SideMenu />
				</Layout.Col>
				<Layout.Col style={{width: '100%'}}>
					<Layout.Row className="admin__headerNav">
					<BreadCrumb />
					</Layout.Row>
					{this.props.children}
				</Layout.Col>
			</Layout.Row>
		);
	}
}

export default Main
