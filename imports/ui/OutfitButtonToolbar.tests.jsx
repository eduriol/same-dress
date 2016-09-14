import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';

import OutfitButtonToolbar from './OutfitButtonToolbar';

describe("OutfitButtonToolbar", function() {
  it("contains one ButtonToolBar", function() {
    const wrapper = shallow(<OutfitButtonToolbar />).find(ButtonToolbar);
    expect(wrapper).to.have.length(1);
	});  

  it("ButtonToolBar contains two buttons", function() {
  	const wrapper = shallow(<OutfitButtonToolbar />).find(ButtonToolbar).children().find(Button);
  	expect(wrapper).to.have.length(2);
	});

	it("Both buttons contain Glyphicons", function() {
  	const wrapper = shallow(<OutfitButtonToolbar />).find(ButtonToolbar).children().find(Button);
  	expect(wrapper.contains([
  		<Glyphicon glyph="pencil" />,
  		<Glyphicon glyph="remove" />,
		])).to.equal(true);
	});

});
