import React, { Component, PropTypes } from 'react';
import { Table } from 'react-bootstrap';
import { createContainer } from 'meteor/react-meteor-data';

import { Outfits } from '../api/outfits.js';

import Outfit from './Outfit';

class OutfitsList extends Component {
    
    renderOutfitsHeader() {
        let outfitProperties = [];
        for (var propertyName in this.props.outfits[0]) {
            if (propertyName !== '_id') {
                outfitProperties.push(<th>{ propertyName }</th>);
            }
        }
        return (
            <thead>
              <tr>
                <th></th>
                { outfitProperties }
                <th></th>
              </tr>
            </thead>  
        );
    }
    
    renderOutfitRows() {
        return this.props.outfits.map(
            (outfit) => (
                <Outfit key={ outfit._id } outfit={ outfit } />
            )
        );
    }
    
    renderOutfitsTable() {
        const outfitsTable = (
          <Table responsive>
            { this.renderOutfitsHeader() }
            <tbody>
              { this.renderOutfitRows() }
            </tbody>
          </Table>
        );
        return outfitsTable;
    }

    render() {
        return (
            <ul>
                { this.renderOutfitsTable() }
            </ul>
        );
    }
}

OutfitsList.propTypes = {
    outfits: PropTypes.array.isRequired,
};

export default createContainer(
    () => {
        return {
            outfits: Outfits.find({}).fetch(),
        };
    }, OutfitsList 
);
