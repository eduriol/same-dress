import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Table } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

import OutfitsList from './OutfitsList';

if (Meteor.isClient) {
  describe('OutfitsList', () => {
    it('contains a table', () => {
      const wrapper = mount(<OutfitsList />).find(Table);
      expect(wrapper).to.have.length(1);
    });
    it('contains a table header in the table', () => {
      const wrapper = mount(<OutfitsList />).find(Table).find('thead');
      expect(wrapper).to.have.length(1);
    });
    it('contains a table body in the table', () => {
      const wrapper = mount(<OutfitsList />).find(Table).find('tbody');
      expect(wrapper).to.have.length(1);
    });
  });
}
