import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './choicePage.html';
import { Pages } from '../../api/pages.js';
import { Choices } from '../../api/choices.js';


class ChoicePageCtrl {
  constructor($scope, $reactive) {
    $reactive(this).attach($scope);

    this.subscribe('pages');
    this.subscribe('choices');

    this.page_name = 'start';

    this.helpers({
      page() {
        return Pages.findOne({page_name: this.getReactively('page_name')});
      },
      choices() {
        return Choices.find({page_name: this.getReactively('page_name')});
      },
      currentUser() {
        return Meteor.user();
      }
    });

    this.changePage = (target_page) => {
      this.page_name = target_page;
    };
  }
}

export default angular.module('choicePage', [
  angularMeteor
])
  .component('choicePage', {
    templateUrl: 'imports/components/choicePage/choicePage.html',
    controller: ['$scope', '$reactive', ChoicePageCtrl]
  });
