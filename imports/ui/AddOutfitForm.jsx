import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

import { insertOutfit } from '../api/outfits.js';

export default class AddOutfitForm extends Component {

  handleSubmit(e) {
    e.preventDefault();
    const newOutfit = {
      type: ReactDOM.findDOMNode(this.refs.typeInput).value.trim(),
      brand: ReactDOM.findDOMNode(this.refs.brandInput).value.trim(),
      color: ReactDOM.findDOMNode(this.refs.colorInput).value.trim(),
      event: ReactDOM.findDOMNode(this.refs.eventInput).value.trim(),
      owner: Meteor.userId(),
    };
    insertOutfit.call(newOutfit, (error) => {
      if (!error) {
        ReactDOM.findDOMNode(this.refs.typeInput).value = 'short';
        ReactDOM.findDOMNode(this.refs.brandInput).value = '';
        ReactDOM.findDOMNode(this.refs.colorInput).value = '';
        ReactDOM.findDOMNode(this.refs.eventInput).value = 'wedding';
      }
    });
  }

  render() {
    return (
      <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup>
          <Col componentClass={ControlLabel} xs={4}>
            Type
          </Col>
          <Col xs={4}>
            <FormControl componentClass="select" ref="typeInput">
              <option value="short">Short dress</option>
              <option value="long">Long dress</option>
              <option value="jumpsuit">Jumpsuit</option>
              <option value="other">Other</option>
            </FormControl>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} xs={4}>
            Brand
          </Col>
          <Col xs={4}>
            <FormControl type="text" ref="brandInput" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} xs={4}>
            Color
          </Col>
          <Col xs={4}>
            <FormControl type="text" ref="colorInput" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formEvent">
          <Col componentClass={ControlLabel} xs={4}>
            Event
          </Col>
          <Col xs={4}>
            <FormControl componentClass="select" ref="eventInput">
              <option value="wedding">Wedding</option>
              <option value="christening">Christening</option>
              <option value="communion">Communion</option>
              <option value="graduation">Graduation</option>
              <option value="other">Other</option>
            </FormControl>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col xs={8}>
            <Button bsStyle="primary" type="submit" className="pull-right">Send</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
