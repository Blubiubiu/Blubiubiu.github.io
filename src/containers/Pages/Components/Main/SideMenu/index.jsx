/**
 * @desc 侧边导航栏
 * @author lsy
 * @todo xxx
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'element-react';
import { inject, observer } from 'mobx-react';

import './style.scss';

@inject('router')
@observer
class SideMenu extends Component {
	constructor (props) {
		super(props)
		this.state = {
			defaultActive: "/"
		}
	}
	render() {
		return (
			<Layout.Row className="admin__sidemenu__contanier">
				<Layout.Col className="admin__sidemenu__contanier__item">
					<Menu
						defaultActive={this.state.defaultActive}
						className="admin__sidemenu__contaniner__menu"
						theme="dark"
						onSelect={this.onSelect.bind(this)}
					>
						{this.recursion(this.props.router.routerArr)}
					</Menu>
				</Layout.Col>
			</Layout.Row>
		);
	}
	componentWillMount() {
		//设置侧边栏默认选中
		this.setState({
			defaultActive: window.location.hash.slice(1)
		})
		this.props.router.setRouterPath(window.location.hash.slice(1))
		this.props.router.routerName = this.findNameByPath(this.props.router.routerArr, this.props.router.routerPath);
	}
	/**
	 * @desc 选中menuItem
	 * @param {string} [val] - 选中path
	 */
	onSelect = (val) => {
		this.props.router.setRouterPath(val)
		this.props.router.routerName = this.findNameByPath(this.props.router.routerArr, this.props.router.routerPath);
	}
	/**
	 * @desc 根据path返回name
	 * @param {array} [arr] - router数据 
	 * @param {string} [path] - 选中path 
	 */
	findNameByPath(arr, path) {
		let NameArr = [],
			index = 0,
			hasParentId = (function loop(arr, index) {
				return arr.some((item) => {
					if (item.path === path) {
						NameArr = NameArr.slice(0, index);
						NameArr.push(item)
						return true;
					} else if (Array.isArray(item.children)) {
						NameArr[index] = item;
						return loop(item.children, index + 1);
					} else {
						return false;
					}
				});
			})(arr, index);
		return hasParentId ? NameArr : [];
	}
	//sidemenu
	recursion(arr) {
		return arr.map((item) => {
			if (item.children && item.children.length) {
				return (
					<Menu.SubMenu
						index={item.path}
						key={item.name}
						title={
							<span>
								<i className={item.type} />
								{item.name}
							</span>
						}
					>
						<div className="admin__menu--padding">
							{this.recursion(item.children)}
						</div>
					</Menu.SubMenu>
				);
			} else if (!item.hideInMenu) {
				return (
					<Link to={item.path} key={item.name}>
						<Menu.Item index={item.path}>
							<i className={item.type} />
							{item.name}
						</Menu.Item>
					</Link>
				);
			}
		});
	}
}
export default SideMenu;
