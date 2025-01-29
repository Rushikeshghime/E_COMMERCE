const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample database (in-memory)
let products = [
  { id: '1', name: 'Product A', price: 10.0, description: 'Description for Product A' },
  { id: '2', name: 'Product B', price: 20.0, description: 'Description for Product B' },
  { id: '3', name: 'Product C', price: 30.0, description: 'Description for Product C' }
];
let orders = [];

// Routes
app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/order', (req, res) => {
  const { items } = req.body;
  const orderId = uuidv4();
  orders.push({ id: orderId, items });
  res.json({ message: 'Order placed successfully!', orderId });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
