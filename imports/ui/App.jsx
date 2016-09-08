import React, { Component, PropTypes } from 'react';
import { Image, Alert } from 'react-bootstrap';
import { createContainer } from 'meteor/react-meteor-data';

import { Outfits } from '../api/outfits.js';

import AddOutfitForm from './AddOutfitForm';
import OutfitsList from './OutfitsList';
import AccountsUIWrapper from './AccountsUIWrapper';

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <Image src="images/logo.png" responsive />
        <br />
        <AccountsUIWrapper />
        { this.props.currentUser ?
          <div>
            <AddOutfitForm />
            <br />
            { (this.props.outfitsCount > 0) ?
              <OutfitsList /> :
              <Alert bsStyle="warning">
                You haven't sent any outfit yet.
              </Alert>
            }
          </div> : ''
        }
      </div>
    );
  }
}

App.propTypes = {
  outfitsCount: PropTypes.number.isRequired,
  currentUser: PropTypes.object,
};

export default createContainer(
  () => {
    return {
      outfitsCount: Outfits.find({}).count(),
      currentUser: Meteor.user(),
    };
  }, App
);
