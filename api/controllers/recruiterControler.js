const Recruiter = require('../models/Recruiters');

exports.add = (req, res) => {
    const {
        name,
        surname,
        country,
        description_rec,
        area_rec,
        active_searchs,
        status_rec
    } = req.body;
    Recruiter.findOrCreate({
        where: { name },
        defaults: {
            name,
            surname,
            country,
            description_rec,
            area_rec,
            active_searchs,
            status_rec,
        },
    }).then(data => {
        if (data[1]) res.status(201).send(data[0]);
        else res.status(400).send(data[1])
    });
};

exports.getAll = (req, res) => {
    Recruiter.findAll()
        .then(data => res.status(201).send(data))
};

exports.getById = (req, res) => {
    const { id } = req.params;
    Recruiter.findOne({ where: { id } })
        .then(data => res.status(201).send(data))
};

exports.update = (req, res) => {
    const { id } = req.params;
    Recruiter.update(req.body,
        {
            where: { id },
            returning: true,
            plaint: true,
        })
        .then(data => res.status(201).send(data))
};

exports.delete = (req, res) => {
    const { id } = req.params;
    Recruiter.destroy({ where: { id } })
        .then(() => res.sendStatus(202))
};