import React, { Component } from 'react';

import AddOutfitForm from './AddOutfitForm.jsx'

export default class App extends Component {
  
  render() {
    return (
      <div className="container">
        <header>
          <h1>Is my outfit going to be worn by someone else?</h1>
        </header>
        <AddOutfitForm/>
      </div>
    );
  }
}
