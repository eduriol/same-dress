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

  });
}
