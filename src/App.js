import React, { Component } from 'react'
import './App.css'

//importing our various custom components to use
import Header from './Components/Header'
import Color from './Components/Color'
import SelectedColor from './Components/SelectedColor'
import ResetBtn from './Components/ResetBtn'

class App extends Component {
	constructor() {
		super()
		//setting some default state
		// we initially set userName to null because we are going to conditionally render some code below
		// we set selectedColro to 'orange' because it is the default we want. this could be any color
		this.state = {
			userName: null,
			selectedColor: 'orange'
		}
		// this is one way to bind the this keyword. we generally having been using the arrow funtion syntax
		this.handleNameUpdate = this.handleNameUpdate.bind(this)
		this.handleSelectedColorUpdate = this.handleSelectedColorUpdate.bind(this)
	}

	//custom method that updates the value of userName on state via a passed in value
	//remember value is just a parameter here
	handleNameUpdate(e) {
		// console.log('update name ran')
		// console.log(e)
		this.setState({
			userName: e.target.value
		})
	}

	//custom method that updates the value of selectedColor on state vis a passed in value
	//remember value is just a parameter here
	handleSelectedColorUpdate(value) {
		console.log(value)
		this.setState({
			selectedColor: value
		})
	}

	// custom method that will reset our selected color back to orange, our initial color on state.
	handleResetColor() {
		this.setState({
			selectedColor: 'orange'
		})
	}

	render() {
		// console log to show whenever a rerender of our App.js happens. Totally optional
		console.log('RERENDER')
		return (
			// parent container div. remember, if we want to
			// display more than one piece of JSX, we need to wrap it in a div
			<div className='App'>
				{/* input to handle adding a username onto state which will be displayed in our Header component
        but how do we user the value on state? check out the answer near the use of the Header component */}
				<input onChange={this.handleNameUpdate} />
				{/* ternary to decide if we should display our Header and Color/Selected Color components or just show some text. this is called conditional rendering. if this.state.userName is truthy, show the good stuff, otherwise show some text */}
				{this.state.userName ? (
					<div>
						{/* Header component with one prop called usrName. the value of userName is reference this.state.userName
            Whatever the value on state is, will be passed down to Header */}
						<Header userName={this.state.userName} />
						{/* Color component has two props, backgroundColor which will literally set the background color in css inside of the component, and method which is just a reference to the custom handleSelectedColorUpdate component we created which updates the larger divs background color and text */}
						<Color
							backgroundColor={'tomato'}
							// Here we are using the .bind version of this function
							method={this.handleSelectedColorUpdate}
						/>
						<Color
							backgroundColor={'aquamarine'}
							// here we are using the arrow function binding
							method={(data) => this.handleSelectedColorUpdate(data)}
						/>
						<Color
							backgroundColor={'slateGray'}
							method={(data) => this.handleSelectedColorUpdate(data)}
						/>
						{/* SelectedColor component has one propr called selectedColorBackground that gets its value from the selectedColor on state. remember, when we click on one of the Color components, we will update the selectedColor value on state which will then cause a rerender and update the selectedColorBackground prop */}
						<SelectedColor selectedColorBackground={this.state.selectedColor} />
						<ResetBtn method={() => this.handleResetColor()} />
					</div>
				) : (
					// Basically our else if the value of userName on state if falsey
					'Please Enter User Name'
				)}
			</div>
		)
	}
}

export default App
