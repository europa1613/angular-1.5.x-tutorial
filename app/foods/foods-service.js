export default ['$http', ($http) => ({
  getAll: () => $http.get('/foods'),
  add: (name) => $http.post('/foods', {
    name: name
  })
})];