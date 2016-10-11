import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Modal, Button } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

import ModalConfirmation from './ModalConfirmation';

if (Meteor.isClient) {
  describe('ModalConfirmation', () => {
    it('contains a title', () => {
      const wrapper = shallow(<ModalConfirmation title="ModalConfirmation title" />).find(Modal.Title);
      expect(wrapper.text()).to.equal('ModalConfirmation title');
    });
    it('contains a body', () => {
      const wrapper = shallow(<ModalConfirmation body="ModalConfirmation body" />).find(Modal.Body);
      expect(wrapper.text()).to.equal('ModalConfirmation body');
    });

    it('contains a close button', () => {
      const wrapper = shallow(<ModalConfirmation />).find(Button);
      expect(wrapper.at(0).text()).to.equal('&times;');
    });
    it('contains a cancel button', () => {
      const wrapper = shallow(<ModalConfirmation cancelLabel="Cancel" />).find(Button);
      expect(wrapper.at(1).text()).to.equal('Cancel');
    });
    it('contains a confirm button', () => {
      const wrapper = shallow(<ModalConfirmation confirmLabel="Delete" />).find(Button);
      expect(wrapper.at(2).text()).to.equal('Delete');
    });
  });
}
