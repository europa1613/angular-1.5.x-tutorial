var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var foods = [{
  "name": "Pizza"
}, {
  "name": "Taco"
}];

app.get('/foods', function(req, res) {
  res.json(foods);
});

app.post('/foods', function(req, res) {
  foods.push({
    name: req.body.name
  });
  res.sendStatus(201);
});

app.use(express.static('app'));

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});