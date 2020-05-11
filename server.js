//Importa as dependências que acabamos de instalar
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/projeto-optimum'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/projeto-optimum/'}
);
});

app.listen(process.env.PORT || 8000);
