const Sequelize = require("sequelize");

const { DB_USER, DB_HOST, DB_PASSWORD } = process.env

const db = new Sequelize("bumeranSelecta", DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "mysql",
    logging: false,
});

module.exports = db;