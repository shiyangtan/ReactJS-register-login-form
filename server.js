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

// user records
let userRecords = [
  {
    username: 'james',
    password: 'james123'
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

// get a list of items
server.get('/items', (request, respond) => {
  let jsonData = {
    items: records,
    paginationInfo: {
      totalResults: records.length,
      resultPerPage: 30,
      currentPage: 1,
      pages: 1,
    },
  };

  respond.json(jsonData);
});

// delete an item
server.delete('/items/:id', (request, respond) => {
  let deleteId = request.params.id;
  let deleteIndex = null;

  // find index of the deleteId
  records.forEach((v, i) => {
    if(v.id === deleteId) {
      deleteIndex = i;
    }
  });

  if(deleteIndex !== null) {
    // delete the element in array
    records.splice(deleteIndex, 1);

    respond.json({items: records});
  } else {
    respond.json({items: records});
  }


});

// register new user
server.post('/register', (request, respond) => {
  let user = {
    username: request.body.username,
    password: request.body.password
  };

  let dummyWait = new Promise((resolve, reject) => {
    setTimeout(() => {
      userRecords.push(user);
      resolve('Success!');
    }, 3000);
  });

  dummyWait.then((successMessage) => {
    respond.status(200).json({message: 'User successfully registered'});
  });

});

// user sign in
server.post('/signin', (request, respond) => {
  let dummyWait = new Promise((resolve, reject) => {
    setTimeout(() => {
      userRecords.forEach((user) => {
        if(user.username === request.body.username &&
            user.password === request.body.password) {
              resolve('Sign in successfully');
        }
      });

      reject('Failed');
    }, 3000);
  });

  dummyWait
  .then((successMessage) => {
    respond.status(200).json({message: 'Sign in successfully'});
  })
  .catch((error) => {
    respond.status(401).json({error: 'Failed to sign in'});
  });
});

// get list of users
server.get('/users', (request, respond) => {
  respond.json({userRecord: userRecords});
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000!');
});
