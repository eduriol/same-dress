import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Outfits = new Mongo.Collection('outfits');

if (Meteor.isServer) {
	Meteor.publish('outfits', function outfitsPublication() {
		return Outfits.find({ owner: this.userId });
	});
}

export const insertOutfit = new ValidatedMethod({
	name: 'Outfits.methods.insert',
	validate: new SimpleSchema({
		type: { type: String },
		brand: { type: String },
		color: { type: String },
		event: { type: String },
		owner: { type: String },
	}).validator(),
	run(outfit) {
		if (!this.userId) {
			throw new Meteor.Error('not-authorized');
		}
		Outfits.insert(outfit);
	},
});

export const removeOutfit = new ValidatedMethod({
	name: 'Outfits.methods.remove',
	validate: new SimpleSchema({
		outfitId: { type: String },
	}).validator(),
	run({ outfitId }) {
		if (!this.userId) {
			throw new Meteor.Error('not-authorized');
		}
		Outfits.remove(outfitId);
	},
});
