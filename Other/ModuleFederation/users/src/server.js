const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/users.html'));
});

app.listen(3001, () => console.log('Listening on port 3001...'));
