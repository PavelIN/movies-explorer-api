const MONGO_URL_DEV = 'mongodb://localhost:27017/bitfilmsdb';
const JWT_SECRET_DEV = 'dev-secret';

const {
  PORT = 3000,
  NODE_ENV,
  JWT_SECRET,
  MONGO_URL,
} = process.env;

module.exports = {
  PORT,
  NODE_ENV,
  JWT_SECRET,
  JWT_SECRET_DEV,
  MONGO_URL,
  MONGO_URL_DEV,
};
