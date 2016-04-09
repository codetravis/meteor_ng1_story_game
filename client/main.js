import angular from 'angular';
import angularMeteor from 'angular-meteor';
import choicePage from '../imports/components/choicePage/choicePage';
import { Meteor } from 'meteor/meteor';
import '../imports/api/pages.js';
import '../imports/api/choices.js';
import '../imports/startup/accounts-config.js';

angular.module('storygame', [
  angularMeteor,
  choicePage.name,
  'accounts.ui'
]);

function onReady() {
  angular.bootstrap(document, ['storygame'], {
    strictDi: true
  });
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
