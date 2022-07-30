// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//   res.send('Está vivo!!!')
// });

// const port = process.env.PORT || 3000;

// app.listen(port);
// console.log(`Escutando na porta ${port}`);

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
const message = process.env.MESSAGE || 'Está vivo!!!';

app.get('/', (req, res) => {
  res.send(message);
});

app.listen(port);
console.log(`Escutando na porta ${port}`);