import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { CirclePicker } from 'react-color';

import { insertOutfit } from '../api/outfits.js';

import EventSelector from './EventSelector'

export default class AddOutfitForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const newOutfit = {
      type: ReactDOM.findDOMNode(this.refs.typeInput).value.trim(),
      brand: ReactDOM.findDOMNode(this.refs.brandInput).value.trim(),
      color: this.state.color,
      event: ReactDOM.findDOMNode(this.refs.eventInput).value.trim(),
      owner: Meteor.userId(),
    };
    insertOutfit.call(newOutfit, (error) => {
      if (!error) {
        ReactDOM.findDOMNode(this.refs.typeInput).value = 'short';
        ReactDOM.findDOMNode(this.refs.brandInput).value = '';
        this.setState({ color: '' });
        ReactDOM.findDOMNode(this.refs.eventInput).value = 'wedding';
      }
    });
  }

  handleChangeComplete(color) {
    this.setState({ color: color.hex });
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
            <CirclePicker
              color={this.state.color}
              onChangeComplete={this.handleChangeComplete.bind(this)}
            />
          </Col>
        </FormGroup>
        <FormGroup controlId="formEvent">
          <Col componentClass={ControlLabel} xs={4}>
            Event
          </Col>
          <Col xs={4}>
            <EventSelector />
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
