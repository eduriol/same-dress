import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

export default class EventsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: '',
    };
  }

  componentDidMount() {
    var self = this;
    alert('1: ' + JSON.stringify(self.state.events));
    FB.api(
      "/me/events",
      {
        access_token: 'EAACEdEose0cBAANrB3jwjCbHSy7SY7tGeMDEk8poJr01LOGrDfmtGrpFg3ZBIh8WhZBZAxhsD4ygYy4ak5R8pd2ZAUMXFF2tfZAHcwZBClvHAefKrEjTLOtOd2GzlQHfseTlsce5qnTDaBVc7PiuYiVJSKvUOelZA5z4rgzkCmqmwZDZD',
      },
      function (response) {
        if (response && !response.error) {
          self.setState({ events: response });
        }
      }
    );
    alert('2: ' + JSON.stringify(self.state.events));
  }

  renderSelectOptions() {
    return this.state.events.map(
      (event) => (
        <option value={ event['id'] }>{ event['name'] }</option>
      )
    );
  }

  render() {
    return (
      <FormControl componentClass="select" ref="eventInput">
        { this.renderSelectOptions() }
      </FormControl>
    );
  }

}
