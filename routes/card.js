const { Router } = require('express');

const { cards_get, cards_post } = require('../controllers/card');

const card = Router();

card.get('/', cards_get);
card.post('/', cards_post);

module.exports = card;
