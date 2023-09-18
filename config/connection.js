// Import Squelize constructor from the library
const Squelize = require('sequelize');

require('dotenv').config

// Create connection to database
let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Squelize.Sequelize(process.env.JAWSDB-URL);
} else {
    sequelize = new Squelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PW,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        });
}

module.exports = sequelize;