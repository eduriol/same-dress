import React from 'react';
import { Random } from 'meteor/random';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Outfit from './Outfit';
import OutfitButtonToolbar from './OutfitButtonToolbar';

import { Outfits } from '../api/outfits.js';

if (Meteor.isClient) {
  describe("Outfit", function() {
    const userId = Random.id();
    const outfitId = Outfits.insert({
        type: 'short',
        brand: 'Chanel',
        color: 'pink',
        event: 'wedding',
        owner: userId,
      });
    outfit = Outfits.findOne({ _id: outfitId });

    it("contains a table row", function() {
      const wrapper = shallow(<Outfit outfit={outfit} />).find('tr');
      expect(wrapper).to.have.length(1);
  	});

    it("contains a table cell with an image", function() {
      const wrapper = shallow(<Outfit outfit={outfit} />).find('tr').find('td').find('img');
      expect(wrapper).to.have.length(1);
  	});

    it("contains one more table cell per outfit property", function() {
      const outfitValues = [];
      outfitValues.push('');
      for (const propertyName in outfit) {
        if (propertyName !== '_id' && propertyName !== 'owner') {
          outfitValues.push(outfit[propertyName.toString()]);
        }
      }
      const wrapper = shallow(<Outfit outfit={outfit} />).find('tr').find('td');
      const texts = wrapper.map(node => node.text());
      expect(texts).to.eql(outfitValues);
  	});

  	it("contains an OutfitButtonToolbar", function() {
      const wrapper = shallow(<Outfit outfit={outfit} />).find('tr').find(OutfitButtonToolbar);
      expect(wrapper).to.have.length(1);  
    });
  });
}
