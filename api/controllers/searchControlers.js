const Searchs = require("../models/Searchs")

exports.add = (req, res) => {


    const { country, area_ser, position, description_ser, vacancies, state_ser
    } = req.body;
    Searchs.create(
        {
            country,
            area_ser,
            position,
            description_ser,
            vacancies,
            state_ser,
        },
    )
        .then(data => res.status(201).send(data));
};

exports.delete = (req, res) => {
    const { id } = req.params;
    Searchs.destroy({ where: { id } })
        .then(() => res.sendStatus(202))
};

