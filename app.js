const express = require('express');
const spRequestRouter = require('./routes/spRequestRoutes');

const app = express();
app.use(express.json());

app.use('/api/v1/spRequest', spRequestRouter);

module.exports = app;
