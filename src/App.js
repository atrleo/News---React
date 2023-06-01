import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
   c= "react";
  render() {
    return (
      <div>
        Now, we will be learning class component in {this.c}.
      </div>
    )
  }
}
