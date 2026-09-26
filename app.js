const express = require('express');
const app = express();

app.use(express.json());

// Serve website from public folder
app.use(express.static('public'));

// Products API
app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Mobile', price: 20000 },
    { id: 3, name: 'Headphones', price: 3000 }
  ]);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});