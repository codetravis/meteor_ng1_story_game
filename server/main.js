import { Meteor } from 'meteor/meteor';
import { Pages } from '../imports/api/pages.js';
import { Choices } from '../imports/api/choices.js';

Meteor.startup(() => {
  // code to run on server at startup
  Pages.remove({});
  var pages = EJSON.parse(Assets.getText("pages.json"));
  pages["pages"].forEach(function (page) {
    Pages.insert(page);
  });

  Choices.remove({});
  var choices = EJSON.parse(Assets.getText("choices.json"));
  choices["choices"].forEach(function (choice) {
    Choices.insert(choice);
  });

});
