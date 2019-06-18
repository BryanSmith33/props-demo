import React, { Component } from 'react'

class SelectedColor extends Component {
	render() {
		return (
			// here we are using inline style to style our selected Color. the reason why is because we want access to the value of the seledtedColorBackground prop
			<div
				style={{
					height: '300px',
					width: '500px',
					backgroundColor: this.props.selectedColorBackground
				}}>
				{/* setting the inner text of the div to the background color */}
				{this.props.selectedColorBackground}
			</div>
		)
	}
}

export default SelectedColor
