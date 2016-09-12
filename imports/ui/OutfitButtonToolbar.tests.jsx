import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Button, ButtonToolbar } from 'react-bootstrap';

import OutfitButtonToolbar from './OutfitButtonToolbar';

describe("OutfitButtonToolbar", function() {
  it("contains one ButtonToolBar", function() {
    expect(shallow(<OutfitButtonToolbar />).find(ButtonToolbar)).to.have.length(1);
	});  

  it("ButtonToolBar contains two buttons", function() {
  	expect(shallow(<OutfitButtonToolbar />).find(ButtonToolbar).children().find(Button)).to.have.length(2);
	});


});
