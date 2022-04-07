const { Searchs, Recruiters } = require("../models/")
const { Op } = require("sequelize")

exports.add = (req, res) => {
  const {
    country,
    area_search,
    position,
    description_search,
    vacancies,
    lapse_search,
    recruiterId,
  } = req.body;
  try {
    Searchs.create({
      country,
      area_search,
      position,
      description_search,
      vacancies,
      lapse_search,
      recruiterId,
    }).then((data) => res.status(201).send(data));
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

exports.delete = (req, res) => {
  const { id } = req.params;
  try {
    Searchs.destroy({ where: { id } }).then(() => res.sendStatus(202));
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

exports.getAll = (req, res) => {
  try {
    Searchs.findAll({ include: Recruiters }).then((data) =>
      res.status(200).send(data)
    );
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

exports.getId = (req, res) => {
  const { id } = req.params;
  try {
    Searchs.findOne({ where: { id } }).then((data) =>
      res.status(200).send(data)
    );
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

exports.new = (req, res) => {
  try {
    Searchs.findAll({ where: { state_search: "Nueva" } }).then((newSearchs) =>
      res.status(200).send(newSearchs)
    );
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

exports.started = (req, res) => {
  try {
    Searchs.findAll({ where: { state_search: "Iniciada" } }).then(
      (startedSearchs) => res.status(200).send(startedSearchs)
    );
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

exports.presented = (req, res) => {
  try {
    Searchs.findAll({ where: { state_search: "Presentada" } }).then(
      (presentedSearchs) => res.status(200).send(presentedSearchs)
    );
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

exports.revision = (req, res) => {
  try {
    Searchs.findAll({ where: { state_search: "Suspendida" } }).then(
      (revisionSearchs) => res.status(200).send(revisionSearchs)
    );
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

exports.closed = (req, res) => {
  try {
    Searchs.findAll({ where: { state_search: "Cerrada" } }).then(
      (closedSearchs) => res.status(200).send(closedSearchs)
    );
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

exports.editSearch = (req, res) => {
  const { id } = req.params
  const {description_search, country, area_search, position, vacancies, lapse_search, recruiterId} = req.body
  try {
    if (recruiterId){
      Searchs.update(req.body, {
        where: { id },
        returning: true,
        plain: true,
      })
      .then(data => res.status(201).send(data))
    } else {
      Searchs.update(req.body, {
        where: { id },
        returning: true,
        plain: true,
        description_search,
        country,
        area_search,
        position,
        vacancies,
        lapse_search,
      })
      .then(data => res.status(201).send(data))
    }
  } catch (error) {
    console.log("ERROR: ", error)
  }
}


exports.filterDate = (req, res) => {
  const { filter_start, filter_end } = req.body;
  try {
    Searchs.findAll({
      where: {
        [Op.and]: [
          {
            start_date: { [Op.between]: [filter_start, filter_end] },
            end_date: { [Op.between]: [filter_start, filter_end] },
          },
        ],
      },
    }).then((data) => res.status(200).send(data));
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

exports.assignment = (req, res) => {
  const { country, area_search } = req.body
  console.log("--->", req.body)
  try {
    Recruiters.findAll({
      where: {
        [Op.and]: [
          {
            country: { [Op.eq]: [country] },
            area_rec: { [Op.eq]: [area_search] },
          },
        ],
      },
    }).then((data) => res.status(200).send(data));
  } catch (error) {
    console.log("ERROR: ", error);
  }
}