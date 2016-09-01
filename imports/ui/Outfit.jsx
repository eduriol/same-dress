import React, { Component, PropTypes } from 'react';

export default class Outfit extends Component {

    render() {
        return (
            <li>{ this.props.outfit.type }</li>
        );
    }
}

Outfit.propTypes = {
    outfit: PropTypes.object.isRequired,
};
