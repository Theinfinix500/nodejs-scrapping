const express = require('express');
const app = express();
const PORT = 3000;
const presidentRoutes = require('./routes/presidents');

app.use('/presidents', presidentRoutes);

function init() {
  console.log(`Starting app on port ${PORT}`);
  app.listen(PORT, () => {
    console.log(`Express server started on port ${PORT}.`);
  });
}

init();
