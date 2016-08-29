import React, { Component } from 'react';

import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';

export default class AddDressForm extends Component {
    render() {
        return (
          <Form horizontal>
            <FormGroup controlId="formDressType">
                <Col componentClass={ControlLabel} xs={4}>
                    Type
                </Col>
                <Col xs={4}>
                    <FormControl componentClass="select" placeholder="select">
                        <option value="shot">Short</option>
                        <option value="long">Long</option>
                        <option value="jumpsuit">Jumpsuit</option>
                        <option value="other">Other</option>
                    </FormControl>
                </Col>
            </FormGroup>
            <FormGroup>
                <Col componentClass={ControlLabel} xs={4}>
                    Brand/Designer
                </Col>
                <Col xs={4}>
                    <FormControl type="text"/>
                </Col>
            </FormGroup>
            <FormGroup>
                <Col componentClass={ControlLabel} xs={4}>
                    Color
                </Col>
                <Col xs={4}>
                    <FormControl type="text"/>
                </Col>
            </FormGroup>
            <FormGroup controlId="formEvent">
                <Col componentClass={ControlLabel} xs={4}>
                    Event
                </Col>
                <Col xs={4}>
                    <FormControl componentClass="select" placeholder="select">
                        <option value="wedding">Wedding</option>
                        <option value="christening">Christening</option>
                        <option value="communion">Communion</option>
                        <option value="graduation">Graduation</option>
                        <option value="other">Other</option>
                    </FormControl>
                </Col>
            </FormGroup>
            <FormGroup>
                <Col componentClass={ControlLabel} xs={4}>
                    City
                </Col>
                <Col xs={4}>
                    <FormControl type="text"/>
                </Col>
            </FormGroup>
            <Col xs={8}>
                <Button bsStyle="primary" type="submit" className="pull-right">Send</Button>
            </Col>
          </Form>
        );
    }
}
