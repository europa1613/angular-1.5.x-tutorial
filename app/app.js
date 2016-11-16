import angular from 'angular';
import AngularRoute from 'angular-route';
import Foods from './foods/foods';

angular.module('angularTutorial', [
  'ngRoute',
  Foods.name
]).config(($routeProvider) => {
  $routeProvider
  .when('/', {
    templateUrl: 'home.html'
  })
  .when('/foods', {
    template: '<foods enable-addition="true"></foods>'
  })
});