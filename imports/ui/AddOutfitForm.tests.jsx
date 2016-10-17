import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { stub } from 'sinon';
import { Form, Button } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { CirclePicker } from 'react-color';

import AddOutfitForm from './AddOutfitForm';

if (Meteor.isClient) {
  describe('AddOutfitForm', () => {
    it('contains a form', () => {
      const wrapper = shallow(<AddOutfitForm />).find(Form);
      expect(wrapper).to.have.length(1);
    });
    it('contains a select for outfit type', () => {
      const wrapper = mount(<AddOutfitForm />);
      expect(wrapper.ref('typeInput').prop('componentClass')).to.equal('select');
    });
    it('contains a text input for outfit brand', () => {
      const wrapper = mount(<AddOutfitForm />);
      expect(wrapper.ref('brandInput').prop('type')).to.equal('text');
    });
    it('contains a picker for outfit color', () => {
      const wrapper = mount(<AddOutfitForm />).find(CirclePicker);
      expect(wrapper).to.have.length(1);
    });
    it('contains a select for event', () => {
      const wrapper = mount(<AddOutfitForm />);
      expect(wrapper.ref('eventInput').prop('componentClass')).to.equal('select');
    });
    it('contains the button to submit the form', () => {
      const wrapper = shallow(<AddOutfitForm />).find(Button);
      expect(wrapper.prop('type')).to.equal('submit');
    });
    it('submits form', () => {
      const onSubmit = stub();
      const wrapper = mount(<Form onSubmit={onSubmit} />);
      wrapper.simulate('submit');
      expect(onSubmit.calledOnce).to.equal(true);
    });
  });
}
