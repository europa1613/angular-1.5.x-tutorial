import FoodsService from './foods-service';
import FoodsCtrl from './foods-controller';
import FoodList from './foodlist-directive';

export default angular.module('foods', [])
.service('FoodsService', FoodsService)
.controller('FoodsCtrl', FoodsCtrl)
.directive('foodlist', FoodList);