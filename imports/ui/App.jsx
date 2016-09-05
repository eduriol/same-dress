import React, { Component, PropTypes } from 'react';
import { Alert } from 'react-bootstrap';
import { createContainer } from 'meteor/react-meteor-data';

import { Outfits } from '../api/outfits.js';

import AddOutfitForm from './AddOutfitForm';
import OutfitsList from './OutfitsList';

export default class App extends Component {
  
  render() {
    return (
      <div className="container">
        <br/>
        <AddOutfitForm />
        <br/>
        { (this.props.outfitsCount > 0) ?
          <OutfitsList /> :
          <Alert bsStyle="warning">
            You haven't sent any outfit yet.
          </Alert>
        }
      </div>
    );
  }
}

App.propTypes = {
  outfitsCount: PropTypes.number.isRequired,
};

export default createContainer(
    () => {
        return {
            outfitsCount: Outfits.find({}).count(),
        };
    }, App
);
