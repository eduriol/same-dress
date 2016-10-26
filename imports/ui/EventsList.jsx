import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

class EventsList extends Component {

  getEvents() {
    var self = this;
    FB.api(
      "/me/events",
      {
        access_token: 'EAAZAKXj1Tfa8BAGjSAmv3B2rBkRDgWCzmM8JHfCFigiJdZAtSgBt7bii7ZA5POn0jq0tGiTh8AsSkkRaYYjZBd5pfHm0cK2vmShtfTUFPgwtaZB5y39xouM3laVp7aHlvFFaGVStO1M0ymXDpCtJ5yeEZBOreZAHvvgKVHs6ZBkxpgZDZD',
      },
      function (response) {
        if (response && !response.error) {
          return response.data;
        }
      }
    );
  }

  render() {
    let prueba = this.getEvents();
    alert(prueba);
    return (
      <div>
        { this.props.events }
      </div>
    );
  }

}

EventsList.propTypes = {
  events: PropTypes.string.isRequired,
};

export default createContainer(
  () => {
    return {
      events: 'hola',
    };
  }, EventsList
);
