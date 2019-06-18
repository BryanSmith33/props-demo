import React, { Component } from 'react'

class Color extends Component {
	render() {
		return (
			//setting some custome styling. again, we want access to the prop backgroundColor being passed down so we are doing some inline styling
			<div
				style={{
					height: '75px',
					width: '75px',
					backgroundColor: this.props.backgroundColor
				}}
				// here we use the onClick event handler. anytime the div is clicked, we run the function we are passing down via props as method.
				onClick={() => this.props.method(this.props.backgroundColor)}
			/>
		)
	}
}

export default Color
