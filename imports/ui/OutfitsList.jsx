import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import Outfit from './Outfit';

export default class OutfitsList extends Component {
    
    getOutfits() {
        return [
            { type: 'short', brand: 'Loewe', color: 'blue', event: 'wedding', city: 'Madrid', date: '2012-04-23' },
            { type: 'short', brand: 'Zara', color: 'pink', event: 'christening', city: 'Valladolid', date: '2014-04-23' },
            { type: 'long', brand: 'Gucci', color: 'red', event: 'wedding', city: 'London', date: '2015-04-23' },
        ];
    }
    
    renderOutfitsHeader() {
        let outfitProperties = [];
        for (var propertyName in this.getOutfits()[0]) {
            outfitProperties.push(<th>{ propertyName }</th>);
        }
        return (
            <thead>
              <tr>
                <th>&nbsp;</th>
                { outfitProperties }
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
