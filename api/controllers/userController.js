const User = require("../models/Users")

exports.register = (req, res) => {
  const { firstName, surname, age, country, email, password } = req.body
  User.findAll({ where: { email: email } }).then(data => {
    if (data[0]) res.status(400).send(false)
    else {
      User.create({
        firstName,
        surname,
        age,
        country,
        email,
        password,
      })
        .then(user => res.status(201).send(user))
        .catch(() => res.status(404))
    }
  })
}

exports.login = (req, res) => {
  res.send(req.user)
}

exports.logout = (req, res) => {
  req.logOut()
  res.sendStatus(200)
}
