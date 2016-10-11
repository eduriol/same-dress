import React, { Component, PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class ModalConfirmation extends Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.body}</Modal.Body>
        <Modal.Footer>
          <Button bsStyle="default" onClick={this.props.onClose}>{this.props.cancelLabel}</Button>
          <Button bsStyle={this.props.bsStyle} onClick={this.props.onConfirm}>{this.props.confirmLabel}</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
