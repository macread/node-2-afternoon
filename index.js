const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();
const productsController = require('./products_controller.js');


const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3000;

massive(process.env.CONNECTION_STRING).then(connection => {
    app.set('db', connection);
  })

app.get('/api/products',productsController.getAll);

app.get('/api/product/:id',productsController.getOne);

app.put('/api/product/:id',productsController.update);

app.post('/api/product',productsController.create);

app.delete('/api/product/:id',productsController.delete);

app.listen( port, () => { console.log(`Server listening on port ${port}`); })