## Vocab

* `state` : State is some default values you want for your Component. We can update state and even reference state when passing down props. Whenver our state is updated, a rerender happens.

* `prop` : a custom attribute we are adding onto our Component to use. We can call this anything we want and it can be any kind of data. One thing to remember is whatever you cal it when you render the component, you have to call it when you go to use it inside of the component

* `conditionally render` : We can tell React to display different components or data with a ternary or if/else statement. This works just like a normal ternary where we evaluate something. If it evaluates to `true` do this, else do something else.

## Walkthrough

If you are feeling shaky with props, no worries. Just keep after it.

Look through the code and read each comment. Notice that we can call props whatever we want. What makes it a prop is that we are displaying our Component we created and then adding something custom onto it. See where it gets its value. Is it from state? Is it hard coded? Once you have an idea, navigate to the actual component and see how the prop is being used. Remember if we have a component called `<DisplayName userName='Bryan' />`, inside of DisplayName.js, we now have access to `this.props.PROPNAME` but whatever we called it when we displayed it, we have to call it that in our component structure. What would we call our prop in `DisplayName.js`?

`this.props.userName`. Remember, casing matters. Whatever you call it above, you have to call it below.