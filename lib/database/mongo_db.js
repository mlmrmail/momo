const mongoskin = require('mongoskin');
const dbConfig = require('./config');

const DBConnection = function () {
  const db = mongoskin.db(dbConfig.getMongoUrl(), { safe: true });
  this.use = function (collection) {
    return db.collection(collection);
  };
};

module.exports = new DBConnection();
