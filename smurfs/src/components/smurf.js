import React from "react"

const Smurf = props => {
  return (
    <div className="Smurf">
    <h2>{props.name}</h2>
    <h2>{props.height}cm tall</h2>
    <h2>{props.age} years old</h2>
    </div>
  )
}

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
}

export default Smurf;
