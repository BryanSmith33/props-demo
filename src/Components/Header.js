import React, { Component } from 'react'

class Header extends Component {
	render() {
		return (
			// displaying the value of userName as text
			// withouth a truthy userName prop, we display "Please Enter a User Name"
			<div>{this.props.userName} Color Palette</div>
		)
	}
}

export default Header
