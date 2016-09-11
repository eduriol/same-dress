/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

import { Outfits, removeOutfit, insertOutfit } from './outfits.js';
 

if (Meteor.isServer) {
  describe('Outfits', () => {
  	describe('methods', () => {
			const userId = Random.id();
			const otherUserId = 'otherUserId';
      let outfitId;
      beforeEach(() => {
        Outfits.remove({});
        outfitId = Outfits.insert({
					type: 'short',
					brand: 'Chanel',
					color: 'pink',
					event: 'wedding',
					owner: userId,
        });
      });

      it('can remove owned outfit', () => {
      	const invocation = { userId };
      	removeOutfit._execute(invocation, { outfitId: outfitId });
      	assert.equal(Outfits.find().count(), 0);
      });

      it ('cannot remove other\'s outfit', () => {
      	const invocation = { otherUserId };
      	assert.throws(
          () => {
            removeOutfit._execute(invocation, { outfitId: outfitId });
          },
          Meteor.Error,
          'not-authorized'
				);
      });

      it ('removes correct outfit among others', () => {
        const invocation = { userId };
        insertOutfit._execute(invocation, {
					type: 'long',
					brand: 'Gucci',
					color: 'blue',
					event: 'christening',
					owner: userId,
        });
        const outfitToDelete = Outfits.findOne({ type: 'long' });
        removeOutfit._execute(invocation, { outfitId: outfitToDelete._id });
        assert.equal(Outfits.find({ type: 'short' }).count(), 1);
        assert.equal(Outfits.find({ type: 'long' }).count(), 0);
      });

      it ('can insert outfit when logged in', () => {
      	const invocation = { userId };
      	insertOutfit._execute(invocation, {
					type: 'long',
					brand: 'Gucci',
					color: 'blue',
					event: 'christening',
					owner: userId,
      	});
      	assert.equal(Outfits.find().count(), 2);      	
      });

      it ('cannot insert outfit when not logged in', () => {
      	assert.throws(
      		() => {
      			insertOutfit._execute({}, {
							type: 'long',
							brand: 'Gucci',
							color: 'blue',
							event: 'christening',
							owner: userId,
      			});
      		}
      	),
      	Meteor.Error,
        'not-authorized'
      });

    });
  });
}
