import React from 'react';
import { Random } from 'meteor/random';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { Table } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

import OutfitsList from './OutfitsList';
import Outfit from './Outfit';

import { Outfits } from '../api/outfits.js';

if (Meteor.isClient) {
  describe("OutfitsList", function() {
    const userId = Random.id();
    Outfits.insert({
      type: 'short',
      brand: 'Chanel',
      color: 'pink',
      event: 'wedding',
      owner: userId,
    });
    Outfits.insert({
      type: 'long',
      brand: 'Gucci',
      color: 'blue',
      event: 'christening',
      owner: userId,
    });
    outfits = Outfits.find({}).fetch();

    it("contains a table", function() {
      const wrapper = mount(<OutfitsList />).find(Table);
      expect(wrapper).to.have.length(1);
  	});

    it("contains a table header in the table", function() {
      const wrapper = mount(<OutfitsList />).find(Table).find('thead');
      expect(wrapper).to.have.length(1);
  	});

    it("contains a table body in the table", function() {
      const wrapper = mount(<OutfitsList />).find(Table).find('tbody');
      expect(wrapper).to.have.length(1);
  	});

  	it("contains one Outfit component in table per outfit in props", function() {
      //OPCION1
      //const wrapper = mount(<OutfitsList />).find(Table).find('tbody');
      //expect(wrapper.contains([
      //  <Outfit key={outfits[0]._id} outfit={outfits[0]} />,
      //  <Outfit key={outfits[1]._id} outfit={outfits[1]} />,
      //])).to.equal(true);
      //OPCION2
      //const wrapper = mount(<OutfitsList />);
      //expect(wrapper.find(Table).find('tbody')).to.have.length(outfits.length);
      expect(true).to.equal(false);
    });

  });
}