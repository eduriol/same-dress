import React, { Component, PropTypes } from 'react';
import { ButtonToolbar, Button, Glyphicon } from 'react-bootstrap';

import { Outfits } from '../api/outfits.js';

export default class OutfitButtonToolbar extends Component {

    deleteThisOutfit() {
        Outfits.remove(this.props.outfit._id);
    }
    
    render() {
        return (
            <td>
                <ButtonToolbar>
                    <Button bsStyle="link">
                        <Glyphicon glyph="pencil"/>
                    </Button>
                    <Button bsStyle="link" onClick={ this.deleteThisOutfit.bind(this) }>
                        <Glyphicon glyph="remove" />
                    </Button>
                </ButtonToolbar>
            </td>                
        );
    }
}
