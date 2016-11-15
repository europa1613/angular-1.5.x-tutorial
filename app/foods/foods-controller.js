export default ['FoodsService', function(FoodsService) {

  this.newFood = null;

  this.foods = [];

  this.refreshFoods = () => FoodsService.getAll().then((response) => this.foods = response.data);

  this.addNewFood = (keyEvent) => {
    if (keyEvent === 13) {
      FoodsService.add(this.newFood).then(this.refreshFoods);
      this.newFood = null;
    }
  };

  this.refreshFoods();

}];