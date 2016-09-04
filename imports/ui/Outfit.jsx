import React, { Component, PropTypes } from 'react';

import OutfitButtonPanel from './OutfitButtonPanel'

export default class Outfit extends Component {

    render() {
        let outfitRow = [];
        for (var propertyName in this.props.outfit) {
            if (propertyName !== '_id') {
                outfitRow.push(<td>{ this.props.outfit[propertyName.toString()] }</td>);
            }
        }
        
        return (
            <tr>
                <td><img src="images/circle_green.png" height="20" width="20"/></td>                
                { outfitRow }
                <OutfitButtonPanel />
            </tr>
        );
    }
}

Outfit.propTypes = {
    outfit: PropTypes.object.isRequired,
};
