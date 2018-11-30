import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class List extends Component {
  render() {
    return (
      <div>
        List
        <Link to="/">to home</Link>
      </div>
    )
  }

	componentDidMount () {
		console.log(4, this)
	}
}
