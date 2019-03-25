import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UsernameComponent from './Components/username';
import PasswordComponent from './Components/password';

class App extends Component {
  render() {
    return (
      <div className="App " >
      <h1>Sign Up Details</h1>
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
        <UsernameComponent type="text" placeholder="Username"/>
        <PasswordComponent/>
        <UsernameComponent type="number" placeholder="Phone Number"/>
        <UsernameComponent type="email" placeholder="Email"/>
        <button className="btn btn-primary">Submit</button>
        </div>
        <div className="col-sm-4"></div>
      </div>
        
      </div>
    );
  }
}

export default App;
