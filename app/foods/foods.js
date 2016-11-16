import FoodsService from './foods-service';
import FoodsCtrl from './foods-controller';
import Foods from './foods-component';

export default angular.module('foods', [])
.service('FoodsService', FoodsService)
.controller('FoodsCtrl', FoodsCtrl)
.component('foods', Foods);