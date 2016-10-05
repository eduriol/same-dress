import React, { Component, PropTypes } from 'react';
import { Table } from 'react-bootstrap';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import { Outfits } from '../api/outfits.js';

import Outfit from './Outfit';

class OutfitsList extends Component {

  renderOutfitsTableHeader() {
    const outfitProperties = [];
    for (const propertyName in this.props.outfits[0]) {
      if (propertyName !== '_id' && propertyName !== 'owner') {
        outfitProperties.push(<th>{ propertyName }</th>);
      }
    }
    return (
      <thead>
        <tr>
          <th />
            { outfitProperties }
          <th />
        </tr>
      </thead>
    );
  }

  renderOutfitRows() {
    return this.props.outfits.map(
      (outfit) => (
        <Outfit key={outfit._id} outfit={outfit} />
      )
    );
  }

  renderOutfitsTableBody() {
    const outfitsTableBody = (
      <tbody>
        { this.renderOutfitRows() }
      </tbody>
    );
    return outfitsTableBody;
  }

  render() {
    return (
      <Table responsive>
        { this.renderOutfitsTableHeader() }
        { this.renderOutfitsTableBody() }
      </Table>
    );
  }
}

OutfitsList.propTypes = {
  outfits: PropTypes.array.isRequired,
};

export default createContainer(
  () => {
    Meteor.subscribe('outfits');
    return {
      outfits: Outfits.find({}).fetch(),
    };
  }, OutfitsList
);
