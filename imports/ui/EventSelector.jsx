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
    FB.api(
      "/me",
      {
        fields: 'email',
        access_token: 'EAAZAKXj1Tfa8BAOIvLXL9P6ehPYrONi4OJvUj5xAezWTp7xswi2ZBTP0E7QRSZBGJHl20kYxKWHAVEdBghWZAaMxAzgM3nu8QwZCZABZBwscEiLC4Lah6UZAIt2aO17heSYFYcSYXO9OkVh9dqIUxXKOey3dPxOdCm4ZD',
      },
      function (response) {
        if (response && !response.error) {
          self.setState({ events: response.email });
        }
      }
    );
  }

  render() {
    return (
      <FormControl componentClass="select" ref="eventInput">
        <option value={ this.state.events }>{ this.state.events }</option>      
      </FormControl>
    );
  }

}
