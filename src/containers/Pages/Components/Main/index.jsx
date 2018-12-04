/**
 * @desc 主页面
 * @author lsy
 * @todo xxx
 */

import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'element-react';

import SideMenu from './SideMenu';

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
						<Breadcrumb separator="/">
							<Breadcrumb.Item>首页</Breadcrumb.Item>
							<Breadcrumb.Item>活动管理</Breadcrumb.Item>
							<Breadcrumb.Item>活动列表</Breadcrumb.Item>
							<Breadcrumb.Item>活动详情</Breadcrumb.Item>
						</Breadcrumb>
					</Layout.Row>
					{this.props.children}
				</Layout.Col>
			</Layout.Row>
		);
	}
}

export default Main
