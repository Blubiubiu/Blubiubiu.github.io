import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../Redux/Action'

class Home extends Component {
	render() {
		return (
			<div>
				<p>Home</p>
				<Link to="/list">to list</Link>
				<p>{this.props.userinfo.userid}</p>
				<p>{this.props.userinfo.city}</p>
				<p onClick={this.change}>修改</p>
			</div>
		);
	}
	change = () => {
		this.props.login({
			userid: 'def',
			city: 'xian'
		})
	}
	componentWillMount () {
		console.log(3, this)
		this.props.login({
			userid: 'abc',
			city: 'beijing'
		})
		// this.change()
	}
}

const mapStateToProps = state => {
	return {
		userinfo: state.userinfo
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		login: data => {
			dispatch(login(data))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)
