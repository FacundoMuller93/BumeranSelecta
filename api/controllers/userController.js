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
  console.log("CONTR_MAIL", email)
  User.findOne({
    where: { email }
  })
  .then(data => res.status(200).send(data))
}

exports.edit = (req, res) => {
  const { id } = req.params
  User.update(req.body,
    {
      where: { id },
      returning: true,
      plain: true,
  })
  .then(data => {
    if (data[1]) res.status(201).send(data[0]);
    else res.status(400).send(data[1])
  })
}