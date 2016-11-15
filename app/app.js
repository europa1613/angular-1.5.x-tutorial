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
    templateUrl: 'foods/foods.html',
    controller: 'FoodsCtrl',
    controllerAs: 'vm'
  })
});