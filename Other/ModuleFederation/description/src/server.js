const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/description.html'));
});

app.listen(3003, () => console.log('Listening on port 3003...'));
