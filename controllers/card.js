const Card = require('../models/Card');

const cards_get = (req, res) => Card.find()
  .then(cards => res.json({ cards }))
  .catch(err => res.status(500).json({ err }));

const cards_post = async (req, res) => {
  const { name, imgurl } = req.body;
  try {
    const card = await Card.create({ name, imgurl });
    res.status(201).json({ card });
  } catch (err) {
    res.status(400).json({ err });
  }
}

module.exports = { cards_get, cards_post };
