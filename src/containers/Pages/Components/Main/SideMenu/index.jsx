/**
 * @desc 侧边导航栏
 * @author lsy
 * @todo xxx
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'element-react';
import { inject, observer } from 'mobx-react';

import './style.scss';

@inject("router")
@observer

class SideMenu extends Component {
	
	render() {
		return (
			<Layout.Row className="admin__sidemenu__contanier">
				<Layout.Col className="admin__sidemenu__contanier__item">
					<Menu
						defaultActive="2"
						className="admin__sidemenu__contaniner__menu"
						theme="dark"
						onOpen={this.onOpen}
						onClose={this.onClose}
					>   
						{	
							this.recursion(this.props.router.routerArr)
						}
						{/* <Menu.SubMenu
							index="1"
							title={
								<span>
									<i className="el-icon-message" />导航一
								</span>
							}
						>
							<Menu.Item index="1-1">选项1</Menu.Item>
							<Menu.Item index="1-2">选项2</Menu.Item>
						</Menu.SubMenu>
						<Menu.SubMenu index="2" title={
								<span>
									<i className="el-icon-menu" />导航二1
								</span>
							}>
							<Menu.SubMenu index="4" title={
								<span>
									<i className="el-icon-menu" />导航二2
								</span>
							} style={{paddingLeft: '33px'}}>
								<Menu.Item index="5">
									<i className="el-icon-setting" />导航二3
								</Menu.Item>
							</Menu.SubMenu>
						</Menu.SubMenu>
						<Menu.Item index="3">
							<i className="el-icon-setting" />导航三
						</Menu.Item> */}
					</Menu>
				</Layout.Col>
			</Layout.Row>
		);
	}
	componentWillMount () {
		this.props.router.routerArr.forEach(ele => {
			
		})
	}
	recursion(arr) {
		return arr.map(item => {
			if (item.children && item.children.length) {
				return (<Menu.SubMenu
					index={item.name}
					key={item.name}
					title={
						<span>
							<i className={item.type} />{item.name}
						</span>
					}
					>
					{this.recursion(item.children)}
				</Menu.SubMenu>)
			} else if (!item.hideInMenu){
				return (<Link to={item.path} key={item.name}><Menu.Item index={item.name}>
					<i className={item.type} />{item.name}
				</Menu.Item></Link>)
			}
		})
	}
}
export default SideMenu