const { json, urlencoded } = require('express');
const { connect } = require('mongoose');
const cors = require('cors');

const listen = (app) => {
  connect(
    'mongodb://localhost:27017/mern-tinder',
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  );
  app.listen(process.env.PORT || 3000);
}

const config = (app) => {
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(cors());
}

module.exports = { listen, config };
