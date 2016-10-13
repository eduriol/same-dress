import React, { Component, PropTypes } from 'react';
import { ButtonToolbar, Button, Glyphicon } from 'react-bootstrap';
import { createContainer } from 'meteor/react-meteor-data';

import ModalConfirmation from './ModalConfirmation';

import { removeOutfit } from '../api/outfits.js';

export default class OutfitButtonToolbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  deleteThisOutfit() {
    removeOutfit.call({ outfitId: this.props.outfit._id });
  }

  closeModal(){
    this.setState({ showModal: false });
  }

  openModal(){
    this.setState({ showModal: true });
  }

  renderDeletionModal() {
    return (
      <ModalConfirmation
        showModal={this.state.showModal}
        onClose={this.closeModal.bind(this)}
        title="Confirm deletion"
        body="Do you really want to delete this outfit? This action cannot be undone."
        cancelLabel="Cancel"
        bsStyle="danger"
        onConfirm={this.deleteThisOutfit.bind(this)}
        confirmLabel="Delete"
      />
    );
  }

  render() {
    return (
      <td>
        <ButtonToolbar>
          <Button bsStyle="link">
            <Glyphicon glyph="pencil" />
          </Button>
          <Button bsStyle="link" onClick={ this.openModal.bind(this) }>
            { this.renderDeletionModal() }
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
