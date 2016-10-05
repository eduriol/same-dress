import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { stub } from 'sinon';
import { Form, FormControl, Button } from 'react-bootstrap';

import AddOutfitForm from './AddOutfitForm';

if (Meteor.isClient) {
  describe("AddOutfitForm", function() {
    
    it("contains a form", function() {
      const wrapper = shallow(<AddOutfitForm />).find(Form);
      expect(wrapper).to.have.length(1);
  	});

    it("contains a select for outfit type", function() {
      const wrapper = mount(<AddOutfitForm />);
      expect(wrapper.ref('typeInput').prop('componentClass')).to.equal('select');
  	});

    it("contains a text input for outfit brand", function() {
      const wrapper = mount(<AddOutfitForm />);
      expect(wrapper.ref('brandInput').prop('type')).to.equal('text');
  	});

  	it("contains a text input for outfit color", function() {
      const wrapper = mount(<AddOutfitForm />);
      expect(wrapper.ref('colorInput').prop('type')).to.equal('text');
    });

    it("contains a select for event", function() {
      const wrapper = mount(<AddOutfitForm />);
      expect(wrapper.ref('eventInput').prop('componentClass')).to.equal('select');
    });

    it("contains the button to submit the form", function() {
      const wrapper = shallow(<AddOutfitForm />).find(Button);
      expect(wrapper.prop('type')).to.equal('submit');
    });

    it("submits form", function() {
      const onSubmit = stub();
      const wrapper = mount(<Form onSubmit={onSubmit} /> );
      wrapper.simulate('submit');
      expect(onSubmit.calledOnce).to.equal(true);
    });

  });
}
