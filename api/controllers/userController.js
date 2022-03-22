const User = require('../models/User')

exports.register = (req, res) => {
    const { name, lastname, email, password } = req.body;
    const roleId = 1;
    User.create({
        name,
        lastname,
        email,
        password,
        roleId,
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