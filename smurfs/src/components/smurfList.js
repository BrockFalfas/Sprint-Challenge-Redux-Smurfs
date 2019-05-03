import React, { Component } from "react";
import Smurf from "./smurf";

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h2>Smurf Village</h2>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                age={smurf.age}
                height={smurf.height}
              />
            )
          })}
      </div>
    )
  }
}

Smurf.defaultProps = {
  smurfs: [],
};

export default Smurfs;