# Angular 1.5.x tutorial

## Module (and dependency injection)
- package/namespace for directives, controllers etc.
- can declare other modules as dependencies
- an Angular app is a module
- the dependency injection container finds dependencies based on their name

```javascript
angular.module('someDependency', []);
const app = angular.module('app', ['someDependency']);
```

## Controller
- declared as a function, instantiated with new
- updates the view model
- contains business logic
- does not touch the DOM
- using this over $scope enables testing without Angular
- array/string syntax enables minification

```javascript
app.controller('FoodsCtrl', ['FoodsService', function(FoodsService) {
  this.refreshFoods = () => FoodsService.getAll().then((response) => this.foods = response.data);
}]);
```

### Two way data binding
- changes made to view model reflected in view and vice versa
- fashionable a few years ago, currently one way binding is preferred
- implementation details leak into everyday work

```javascript
app.controller('FoodsCtrl', [function() {
  this.newFood = null;
}]);
```

```html
<input type="text" ng-model="vm.newFood" />
```

## Template
- the actual view
- references the view model
- little syntax checking, extremely prone to typo bugs

```html
<ul>
  <li ng-repeat="food in vm.foods">{{food}}</li>
</ul>
```

## Directive
- adds behavior to DOM elements
- can alter the DOM
- means to create reusable components
- clunky syntax, simplified by component

```javascript
app.directive('authorize', [() => ({
  restrict: 'A',
  link: function(scope, element, attrs) {
    if (kekWillsIt()) {
      element.css('visibility', 'visible');
    } else {
      element.css('visibility', 'hidden');
    }
  }
})]);
```
## Component

```javascript
app.component('foods', {
  templateUrl: 'foods/foods.html',
  bindings: {
    enableAddition: '<'
  },
  controller: 'FoodsCtrl',
  controllerAs: 'vm'
});
```

## Filter
- funnily named, usually a map operation
- used in templates

```html
<li ng-repeat="food in vm.foods | uppercase">{{...}}</li>
```

## Service/factory
- singleton object
- most Angular utilities are services, e.g. $http
- service syntax is a constructor function
- factory syntax returns an object literal

```javascript
app.service('someService', function() {
  this.doStuff = function() { ... };
});
```

```javascript
app.factory('someService', function() {
  return {
    doStuff: function() { ... }
  };
});
```

## Routes
- ngRoute
- each view has requires a "base" controller and template
- components work here nicely

```javascript
const app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
  .when('/foods', {
    template: '<foods></foods>'
  });
});
```

## Testing
- TODO