const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");


class Users extends Model {


}

Users.init(
    {
        // Model attributes are defined here
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {

                min: 8
            },
        },
        salt: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: "user",
        },
    },
    {
        // Other model options go here
        sequelize: db, // We need to pass the connection instance
        modelName: "users", // We need to choose the model name
    }
);


// the defined model is the class itself
module.exports = Users;