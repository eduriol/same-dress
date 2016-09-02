import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import Outfit from './Outfit';

export default class OutfitsList extends Component {
    
    getOutfits() {
        return [
            { _id: 1, type: 'short', brand: 'Loewe', color: 'blue', event: 'wedding', city: 'Madrid', date: '2012-04-23' },
            { _id: 2, type: 'short', brand: 'Zara', color: 'pink', event: 'christening', city: 'Valladolid', date: '2014-04-23' },
            { _id: 3, type: 'long', brand: 'Gucci', color: 'red', event: 'wedding', city: 'London', date: '2015-04-23' },
        ];
    }
    
    renderOutfitsHeader() {
        return (
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Type</th>
                <th>Brand</th>
                <th>Color</th>
                <th>Event</th>
                <th>City</th>
                <th>Date</th>
              </tr>
            </thead>  
        );
    }
    
    renderOutfitRows() {
        return this.getOutfits().map(
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
