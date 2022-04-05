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

exports.getId = (req, res) => {
    const { id } = req.params;
    Searchs.findOne({ where: { id } })
        .then(data => res.status(200).send(data))
};
exports.new = (req, res) => {
    Searchs.findAll({where : {state_search : "Nueva"}})
    .then((newSearchs) => res.status(200).send(newSearchs))
};

exports.started = (req, res) => {
    Searchs.findAll({where : {state_search : "Iniciada"}})
    .then((startedSearchs) => res.status(200).send(startedSearchs))
};

exports.presented = (req, res) => {
    Searchs.findAll({where : {state_search : "Presentada"}})
    .then((presentedSearchs) => res.status(200).send(presentedSearchs))
};

exports.revision = (req, res) => {
    Searchs.findAll({where : {state_search : "Suspendida"}})
    .then((revisionSearchs) => res.status(200).send(revisionSearchs))
};

exports.closed = (req, res) => {
    Searchs.findAll({where : {state_search : "Cerrada"}})
    .then((closedSearchs) => res.status(200).send(closedSearchs))
};
