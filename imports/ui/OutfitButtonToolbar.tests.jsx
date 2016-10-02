import React from 'react';
import { Random } from 'meteor/random';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import { Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';

import OutfitButtonToolbar from './OutfitButtonToolbar';

import { Outfits } from '../api/outfits.js';

if (Meteor.isClient) {
  describe("OutfitButtonToolbar", function() {
    //Outfits.remove({});
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

  	it("both buttons contain Glyphicons", function() {
    	const wrapper = shallow(<OutfitButtonToolbar outfit={outfit} />).find('td').find(ButtonToolbar).children().find(Button);
    	expect(wrapper.at(0).contains(<Glyphicon glyph="pencil" />)).to.equal(true);
    	expect(wrapper.at(1).contains(<Glyphicon glyph="remove" />)).to.equal(true);
  	});

    it("calls delete method when proper button clicked", function() {
      const wrapper = shallow(<OutfitButtonToolbar outfit={outfit} />).find('td').find(ButtonToolbar).children().find(Button).at(1);
      expect(function(){
        wrapper.simulate('click');
      }).to.throw('not-authorized');
    });
  });
}
