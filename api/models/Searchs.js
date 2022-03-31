const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");


class Searchs extends Model {


}

Searchs.init(
    {
        // Model attributes are defined here
        country: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        area_search: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        position: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description_search: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        vacancies: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        state_search: {
            type: DataTypes.STRING,
            defaultValue: "iniciada"
        },
        lapse_search: {
            type: DataTypes.STRING
        }

    },
    {
        // Other model options go here
        sequelize: db, // We need to pass the connection instance
        modelName: "searchs", // We need to choose the model name
    }
);


// the defined model is the class itself
module.exports = Searchs;