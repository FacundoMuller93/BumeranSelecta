const Sequelize = require("sequelize");

const db = new Sequelize("bumeranSelecta", "root", "password", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});

module.exports = db;