import React, { Component } from 'react';

import Outfit from './Outfit';

export default class OutfitsList extends Component {
    
    getOutfits() {
        return [
            { _id: 1, type: 'short', brand: 'Loewe', color: 'blue', event: 'wedding', city: 'Madrid', date: '2012-04-23' },
            { _id: 2, type: 'short', brand: 'Zara', color: 'pink', event: 'christening', city: 'Valladolid', date: '2014-04-23' },
            { _id: 3, type: 'long', brand: 'Gucci', color: 'red', event: 'wedding', city: 'London', date: '2015-04-23' },
        ];
    }
    
    renderOutfits() {
        return this.getOutfits().map(
            (outfit) => (
                <Outfit key={ outfit._id } outfit={ outfit } />
            )
        );
    }

    render() {
        return (
            <ul>
                { this.renderOutfits() }
            </ul>
        );
    }
}
