import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

export const Choices = new Mongo.Collection('choices');

if (Meteor.isServer) {
  Meteor.publish('choices', function pagesPublication() {
    return Choices.find();
  });
}
