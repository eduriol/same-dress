import React, { Component } from 'react';

import { Glyphicon } from 'react-bootstrap';

export default class OutfitButtonPanel extends Component {

    render() {
        return (
            <td>
                <Glyphicon glyph="pencil" />
                &nbsp;&nbsp;
                <Glyphicon glyph="remove" />
            </td>                
        );
    }
}
