const { connect, connection } = require('mongoose');

connect('mongodb://localhost3001/socialNetwork', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
