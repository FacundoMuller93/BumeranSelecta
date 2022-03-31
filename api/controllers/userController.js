const User = require("../models/Users")

exports.register = (req, res) => {
  const { firstName, surname, age, country, email, password } = req.body;
  User.findOrCreate({
    where: { email },
    defaults: {
      firstName,
      surname,
      age,
      country,
      email,
      password,
    },
  }).then(data => {
    if (data[1]) res.status(201).send(data[0]);
    else res.status(400).send(data[1])
  });
};

exports.login = (req, res) => {
  res.send(req.user)
}

exports.logout = (req, res) => {
  req.logOut()
  res.sendStatus(200)
}

exports.find = (req, res) => {
  const { email } = req.params
  User.findOne({
    where: { email }
  })
  .then(data => res.status(200).send(data))
}

exports.delete = (req, res) => {
  const { id } = req.params;
  User.destroy({ where: { id } })
      .then(() => res.sendStatus(202))
}