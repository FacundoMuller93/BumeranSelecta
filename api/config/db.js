const Sequelize = require("sequelize");

const db = new Sequelize("base-prueba", "root", "password", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});

module.exports = db;