import React, { Component, PropTypes } from 'react';
import { ButtonToolbar, Button, Glyphicon } from 'react-bootstrap';
import { createContainer } from 'meteor/react-meteor-data';

import { removeOutfit } from '../api/outfits.js';

export default class OutfitButtonToolbar extends Component {

  deleteThisOutfit() {
    removeOutfit.call({ outfitId: this.props.outfit._id });
  }

  render() {
    return (
      <td>
        <ButtonToolbar>
          <Button bsStyle="link">
            <Glyphicon glyph="pencil" />
          </Button>
          <Button bsStyle="link" onClick={this.deleteThisOutfit.bind(this)}>
            <Glyphicon glyph="remove" />
          </Button>
        </ButtonToolbar>
      </td>
    );
  }

}

OutfitButtonToolbar.propTypes = {
  outfit: PropTypes.object.isRequired,
};
