// 5. Implement a Basic REST API with Express (GET, POST, PUT, DELETE)

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let items = [
  { id: 1, name: "Item One" },
  { id: 2, name: "Item Two" }
];

// GET all items
app.get('/items', (req, res) => {
  res.json(items);
});

// POST a new item
app.post('/items', (req, res) => {
  const newItem = { id: Date.now(), ...req.body };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT update item
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  items = items.map(item => item.id === id ? { ...item, ...req.body } : item);
  res.json({ message: "Item updated" });
});

// DELETE an item
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  items = items.filter(item => item.id !== id);
  res.json({ message: "Item deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
