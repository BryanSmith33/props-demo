import React from 'react'

// when we want to use a functional component, we have to pass in props as a param to the function to access it
const ResetBtn = (props) => (
  <button onClick={props.method}>Reset</button>
)

export default ResetBtn