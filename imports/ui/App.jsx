import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import AddDressForm from './AddDressForm.jsx'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Is my dress going to be worn by someone else?</h1>
        </header>
        <AddDressForm/>
      </div>
    );
  }
}
