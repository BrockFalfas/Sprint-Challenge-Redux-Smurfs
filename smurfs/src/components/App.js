import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions/index"
import SmurfList from "./smurfList"
import SmurfForm from "./smurfForm"
class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <SmurfList smurfs={this.props.smurfs}/>
        <SmurfForm addSmurf={this.props.addSmurf}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf}
)(App);