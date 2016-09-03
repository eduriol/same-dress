import React, { Component, PropTypes } from 'react';

export default class Outfit extends Component {

    render() {
        let outfitRows = [];
        for (var propertyName in this.props.outfit) {
            if (propertyName !== '_id') {
                outfitRows.push(<td>{ this.props.outfit[propertyName.toString()] }</td>);
            }
        }
        
        return (
            <tr>
                <td><img src="images/circle_green.png" height="20" width="20"/></td>                
                { outfitRows }
            </tr>
        );
    }
}

Outfit.propTypes = {
    outfit: PropTypes.object.isRequired,
};
