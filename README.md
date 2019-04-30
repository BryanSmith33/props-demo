## Vocab

* `state` : State is some default values you want for your Component. We can update state and even reference state when passing down props. Whenver our state is updated, a rerender happens.

* `prop` : a custom attribute we are adding onto our Component to use. We can call this anything we want and it can be any kind of data. One thing to remember is whatever you cal it when you render the component, you have to call it when you go to use it inside of the component

* `conditionally render` : We can tell React to display different components or data with a ternary or if/else statement. This works just like a normal ternary where we evaluate something. If it evaluates to `true` do this, else do something else.

* `this.state ={}` : will set our initial data about the component. Used with class based components

* `props` : Can be named whatever we want but should make sense. We use props to pass data/information from parent to child. This can be anything (functions, variables, something off of state)

* `class based component` : uses the `class NAME extends Component {}` syntax. Has access to the constructor, state inside the constructor and lifecylce methods if you choose to use them. Accesses props by this.props.PROPNAME

* `stateless functional components` : uses `const NAME = () => ()` OR `function NAME(){}` syntax. DOES NOT have direct access to state. Does not have access to lifecylce methods or constructors. Accesses props via props.PROPNAME. props needs to be passed in as argument to access.

* `bind` : There are three ways to bind methods to the this keyword. One method is public class fields (look it up, we didn't cover it as it is experimental), using .bind like this.METHODNAME = this.METHODNAME.bind(this) or when the function is used using an arrow function like this onClick={() => this.METHODNAME()}

## Walkthrough

If you are feeling shaky with props, no worries. Just keep after it.

Look through the code and read each comment. Notice that we can call props whatever we want. What makes it a prop is that we are displaying our Component we created and then adding something custom onto it. See where it gets its value. Is it from state? Is it hard coded? Once you have an idea, navigate to the actual component and see how the prop is being used. Remember if we have a component called `<DisplayName userName='Bryan' />`, inside of DisplayName.js, we now have access to `this.props.PROPNAME` but whatever we called it when we displayed it, we have to call it that in our component structure. What would we call our prop in `DisplayName.js`?

`this.props.userName`. Remember, casing matters. Whatever you call it above, you have to call it below.
