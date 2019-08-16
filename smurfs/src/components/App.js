import React, {useEffect} from 'react';
import "./App.css";

import {connect} from 'react-redux'

import {getData} from '../actions'
import SmurfsForm from './SmurfsForm.js'

import Smurf from './Smurf.js'

const App = props => {
  useEffect(() => {
    console.log(props.smurfs)
}, [props.smurfs])
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      
      <SmurfsForm onClick={props.getData} />
      
      {props.smurf &&props.smurfs.map(person => 
        <Smurf key={person.id} person={person} />
        )}
    </div>
  );

}

const mapStateToProps = state => {
return{
  test: state.test,
  smurfs: state.smurfs
}
}

export default connect(
mapStateToProps, {
  getData
})(App);