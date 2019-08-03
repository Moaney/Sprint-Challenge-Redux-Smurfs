import React, { Component } from 'react';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import { addSmurf } from '../actions';

class SmurfView extends Component {


componentDidMount() {
  this.props.getSmurfs();
  this.props.addSmurf();
}



  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
  };
};

export default connect(
  mapStateToProps,
  {getSmurfs, addSmurf}
)(SmurfView);