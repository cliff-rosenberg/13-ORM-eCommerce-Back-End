require('dotenv').config({ path: __dirname + `/../.env` });

const Sequelize = require('sequelize');

// NOTE: 'JAWSDB' is for Heroku database setups
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
