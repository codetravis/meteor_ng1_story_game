import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

export const Pages = new Mongo.Collection('pages');

if (Meteor.isServer) {
  Meteor.publish('pages', function pagesPublication() {
    return Pages.find();
  });
}
