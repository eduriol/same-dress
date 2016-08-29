import React, { Component } from 'react';

export default class App extends Component {
  sayHello() {
      return (
        <p>Hello World!</p>    
      );
  }
  
  render() {
    return (
      <div className="container">
        <header>
          <h1>Same Dress</h1>
        </header>
 
        <ul>
          {this.sayHello()}
        </ul>
      </div>
    );
  }
}