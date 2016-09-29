import React from 'react';
import { Random } from 'meteor/random';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Table } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

import OutfitsList from './OutfitsList';

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
      //const wrapper = shallow(<OutfitsList outfits={outfits} />).find(Table);
      //expect(wrapper).to.have.length(1);
  	});

    it("contains a table header in the table", function() {

  	});

    it("contains a table body in the table", function() {

  	});

  	it("contains one Outfit component in table per outfit in props", function() {

    });

  });
}