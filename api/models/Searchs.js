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
        area_search: {
            type: DataTypes.STRING,
            allowNull: false,
            get() {
                return this.getDataValue('area_search').split(',')
            }
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description_search: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vacancies: {
            type: DataTypes.INTEGER,
            allowNull: false,
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