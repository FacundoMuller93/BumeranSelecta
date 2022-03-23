const User = require('../models/Users')

exports.register = (req, res) => {
    const { firstName, surname, age, country, email, password } = req.body;
    User.create({
        firstName,
        surname,
        age,
        country,
        email,
        password,
    }).then(user => {
        res.status(201).send(user);
    });
};

exports.login = (req, res) => {
    res.send(req.user);
};

exports.me = (req, res) => {
    if (!req.user) return res.sendStatus(401);
    res.send(req.user);
};

exports.logout = (req, res) => {
    req.logOut();
    res.sendStatus(200);
};