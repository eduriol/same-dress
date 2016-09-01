import React, { Component } from 'react';

import AddOutfitForm from './AddOutfitForm';
import OutfitsList from './OutfitsList';

export default class App extends Component {
  
  render() {
    return (
      <div className="container">
        <br/>
        <AddOutfitForm />
        <br/>
        <OutfitsList />
      </div>
    );
  }
}
