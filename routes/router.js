const { Router } = require('express');

const card = require('./card');

const root = Router();

root.use('/cards', card);

module.exports = root;
