import React, { Component } from 'react';

export default class EventDatePicker extends Component {
    
    constructor(props) {
        super(props);
        var moment = require('moment');
        this.state = {
            date: moment()
        };
    }
  
    handleChange(date) {
        this.setState({ date: date });
    }
    
    render() {
        const DatePicker = require('react-datepicker');
        require('react-datepicker/dist/react-datepicker.css');
        return (
            <DatePicker className='form-control' selected={ this.state.date } onChange={ this.handleChange.bind(this) } />
        );
    }
}
