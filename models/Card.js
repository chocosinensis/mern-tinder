const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
  name: String,
  imgurl: String
});

const Card = model('card', cardSchema);

module.exports = Card;
