import angular from 'angular';
import 'angular-mocks';
import FoodsService from './foods-service';

import FoodsCtrl from './foods-controller';

describe('FoodsCtrl', () => {

  let ctrl, $httpBackend;

  beforeEach(() => {
    angular.mock.module(($provide) => {
      $provide.service('FoodsService', FoodsService);
    });
    angular.mock.inject(($controller, _$httpBackend_) => {
      ctrl = $controller(FoodsCtrl);
      $httpBackend = _$httpBackend_;
    });
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  beforeEach(() => {
    $httpBackend.expectGET('/foods').respond([]);
    $httpBackend.flush();
  });

  it('should initialize newFood', () => {
    expect(ctrl.newFood).toBeNull();
  });

  it('refreshFoods should retrieve and set foods', () => {
    const responseFoods = [{
      name: 'Pizza'
    }];
    $httpBackend.expectGET('/foods').respond(responseFoods);

    ctrl.refreshFoods();
    $httpBackend.flush();

    expect(ctrl.foods).toEqual(responseFoods);
  });

});