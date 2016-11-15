const template = `
<ul>
  <li ng-repeat="food in foods">{{food.name}}</li>
</ul>
`;

export default [() => ({
  restrict: 'E',
  scope: {
    foods: '='
  },
  template: template
})];