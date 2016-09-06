import React, { Component, PropTypes } from 'react';

import OutfitButtonToolbar from './OutfitButtonToolbar';

export default class Outfit extends Component {

  render() {
    const outfitRow = [];
    for (const propertyName in this.props.outfit) {
      if (propertyName !== '_id') {
        outfitRow.push(<td>{ this.props.outfit[propertyName.toString()] }</td>);
      }
    }

    return (
      <tr>
        <td>
          <img src="images/circle_green.png" role="presentation" height="20" width="20" />
        </td>
        { outfitRow }
        <OutfitButtonToolbar outfit={this.props.outfit} />
      </tr>
    );
  }
}

Outfit.propTypes = {
  outfit: PropTypes.object.isRequired,
};
