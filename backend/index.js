const express = require('express');
const cors = require('cors');
const toys = require('./toys.json');

const app = express();

app.use(cors());

app.get('/', (_, res) => {
  res.send(toys);
});

app.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const toy = toys.find(toy => toy.id === id);

  if (toy) {
    res.send(toy);
  } else {
    res.status(404).send({ error: 'Toy not found' });
  }
});

app.post('/:id/buy', (req, res) => {
  const id = Number(req.params.id);
  const toy = toys.find(toy => toy.id === id);

  if (toy) {
    if (toy.stock > 0) {
      toy.stock -= 1;
      res.send(toy);
    } else {
      res.status(400).send({ error: 'Toy not in stock' });
    }
  } else {
    res.status(404).send({ error: 'Toy not found' });
  }
});

app.listen(8080, () => console.log('Server started on port 8080'));
