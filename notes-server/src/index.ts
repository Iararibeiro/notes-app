import express = require('express');

const app: express.Application = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/documentation/index.html');
});

app.listen(port, function () {
    console.log(`Running server on port ${port}`);
})
