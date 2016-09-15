import React from 'react';
import { Random } from 'meteor/random';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';

import OutfitButtonToolbar from './OutfitButtonToolbar';
import { Outfits, removeOutfit } from '../api/outfits.js';

describe("OutfitButtonToolbar", function() {
	const userId = Random.id();
  const outfitId = Outfits.insert({
			type: 'short',
			brand: 'Chanel',
			color: 'pink',
			event: 'wedding',
			owner: userId,
    });
  outfit = Outfits.findOne({ _id: outfitId });

  it("contains a table cell", function() {
    const wrapper = shallow(<OutfitButtonToolbar outfit={outfit} />).find('td');
    expect(wrapper).to.have.length(1);
	});

  it("contains one ButtonToolBar", function() {
    const wrapper = shallow(<OutfitButtonToolbar outfit={outfit} />).find('td').find(ButtonToolbar);
    expect(wrapper).to.have.length(1);
	});

  it("ButtonToolBar contains two buttons", function() {
  	const wrapper = shallow(<OutfitButtonToolbar outfit={outfit} />).find('td').find(ButtonToolbar).children().find(Button);
  	expect(wrapper).to.have.length(2);
	});

	it("Both buttons contain Glyphicons", function() {
  	const wrapper = shallow(<OutfitButtonToolbar outfit={outfit} />).find('td').find(ButtonToolbar).children().find(Button);
  	expect(wrapper.at(0).contains(<Glyphicon glyph="pencil" />)).to.equal(true);
  	expect(wrapper.at(1).contains(<Glyphicon glyph="remove" />)).to.equal(true);
	});

});