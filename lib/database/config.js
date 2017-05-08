// specify the DB parameters
const _ = require('lodash');

const DATABASE_SERVICE_NAME = process.env.DATABASE_SERVICE_NAME || 'localhost';
const MONGODB_USER = process.env.MONGODB_USER || '';
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD || '';
const MONGODB_DATABASE = process.env.MONGODB_DATABASE || 'test';

const dbConfig = {};

dbConfig.getMongoUrl = function () {
  let url;
  if (!_.isEmpty(MONGODB_USER) && !_.isEmpty(MONGODB_PASSWORD)) {
    url = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${DATABASE_SERVICE_NAME}/${MONGODB_DATABASE}?auto_reconnect=true`;
  } else {
    url = `mongodb://${DATABASE_SERVICE_NAME}/${MONGODB_DATABASE}?auto_reconnect=true`;
  }

  return url;
};

module.exports = dbConfig;
