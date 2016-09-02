import React, { Component, PropTypes } from 'react';

export default class Outfit extends Component {

    render() {
        return (
            <tr>
                <td><img src="images/circle_green.png" height="20" width="20"/></td>                
                <td>{ this.props.outfit.type }</td>
                <td>{ this.props.outfit.brand }</td>
                <td>{ this.props.outfit.color }</td>
                <td>{ this.props.outfit.event }</td>
                <td>{ this.props.outfit.city}</td>
                <td>{ this.props.outfit.date }</td>
            </tr>
        );
    }
}

Outfit.propTypes = {
    outfit: PropTypes.object.isRequired,
};
