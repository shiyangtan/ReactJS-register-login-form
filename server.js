const express = require('express');
const server = express();
const path = require('path');
const bodyParser = require('body-parser');

// dummy records
let records = [
  {
    id: "123",
    name: "iPhone 7",
    price: "3099",
    brand: "Apple"
  },
];

// parsing application/json and form data
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// serve static files
server.use(express.static('build'));

// browse to see React components
server.get('/react', (request, respond) => {
  respond.sendFile(path.join(__dirname + '/html/profile.html'))
});

// html page to add new item
server.get('/', (request, respond) => {
  respond.sendFile(path.join(__dirname + '/html/AddItem.html'))
});

// insert a new item
server.post('/items', (request, respond) => {
  // create the json object
  let item = {
    id: request.body.itemId,
    name: request.body.itemName,
    price: request.body.itemPrice,
    brand: request.body.itemBrand,
  };

  // push into dummy records
  records.push(item);

  // send response to client
  respond.json({
    item
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000!');
});
