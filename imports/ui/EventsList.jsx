import React, { Component } from 'react';

export default class EventsList extends Component {

  renderFacebookUser() {
    /* make the API call */
    FB.api(
        "/10154740868438578?fields=email",
        {
          access_token : 'EAAZAKXj1Tfa8BAJAGnhn73hj36dZBZC6bG9gX42uUdikeg0snCY0z8EH0mFdasbI6VAFSItZBv0dBIQwkuKMhhQeX280EOBhKb4NP9rFmJyCjXcKg7ZAEC9oAABKsrZCkEpOvsMIchcghujZB4SYEjZAJFkrX0ecxksZD'
        },
        function (response) {
          if (response && !response.error) {
            alert(JSON.stringify(response));
          }
        }
    );
  }

  render() {
    return (
      <div>
        {this.renderFacebookUser()}
      </div>
    );
  }

}
