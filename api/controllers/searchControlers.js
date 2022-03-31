const { Searchs, Recruiters } = require("../models/")

exports.add = (req, res) => {


    const { country, area_search, position, description_search, vacancies, lapse_search, recruiterId
    } = req.body;
    Searchs.create(
        {
            country,
            area_search,
            position,
            description_search,
            vacancies,
            lapse_search,
            recruiterId
        },
    )
        .then(data => res.status(201).send(data));
};

exports.delete = (req, res) => {
    const { id } = req.params;
    Searchs.destroy({ where: { id } })
        .then(() => res.sendStatus(202))
};

exports.getAll = (req, res) => {
    Searchs.findAll({ include: Recruiters })
        .then(data => res.status(200).send(data))
};

