const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");


class Searchs extends Model {


}

Searchs.init(
    {
        // Model attributes are defined here
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        area_ser: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description_ser: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vacancies: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state_ser: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        // Other model options go here
        sequelize: db, // We need to pass the connection instance
        modelName: "searchs", // We need to choose the model name
    }
);


// the defined model is the class itself
module.exports = Searchs;