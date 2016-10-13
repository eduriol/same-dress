import React from 'react';
import { Random } from 'meteor/random';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import { Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

import OutfitButtonToolbar from './OutfitButtonToolbar';

import { Outfits } from '../api/outfits.js';

if (Meteor.isClient) {
  describe('OutfitButtonToolbar', () => {
    const userId = Random.id();
    const outfitId = Outfits.insert({
      type: 'short',
      brand: 'Chanel',
      color: 'pink',
      event: 'wedding',
      owner: userId,
    });
    const outfit = Outfits.findOne({ _id: outfitId });
    it('contains a table cell', () => {
      const wrapper = shallow(<OutfitButtonToolbar outfit={outfit} />).find('td');
      expect(wrapper).to.have.length(1);
    });
    it('contains one ButtonToolBar', () => {
      const wrapper = shallow(<OutfitButtonToolbar outfit={outfit} />)
        .find('td').find(ButtonToolbar);
      expect(wrapper).to.have.length(1);
    });
    it('ButtonToolBar contains two buttons', () => {
      const wrapper = shallow(<OutfitButtonToolbar outfit={outfit} />)
        .find('td').find(ButtonToolbar).children()
        .find(Button);
      expect(wrapper).to.have.length(2);
    });
    it('both buttons contain Glyphicons', () => {
      const wrapper = shallow(<OutfitButtonToolbar outfit={outfit} />)
      .find('td').find(ButtonToolbar).children()
      .find(Button);
      expect(wrapper.at(0).contains(<Glyphicon glyph="pencil" />)).to.equal(true);
      expect(wrapper.at(1).contains(<Glyphicon glyph="remove" />)).to.equal(true);
    });
    it('does not show modal confirmation window before clicking button', () => {
      const wrapper = shallow(<OutfitButtonToolbar outfit={outfit} />);
      expect(wrapper.state().showModal).to.equal(false);
    });
    it('shows modal confirmation window when delete button clicked', () => {
      const wrapper = shallow(<OutfitButtonToolbar outfit={outfit} />);
      const button = wrapper.find('td').find(ButtonToolbar).children().find(Button)
      .at(1);
      button.simulate('click');
      expect(wrapper.state().showModal).to.equal(true);
    });
  });
}
