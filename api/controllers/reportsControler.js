const { Searchs } = require("../models")
const { Recruiters } = require("../models")
const { Op }  = require("sequelize")


//retornan número con cantidad búsquedas según estado

exports.new = (req, res) => {
    try {
         Searchs.count ({where : {state_search : "Nueva"}}).then(
        (newSearchCount) => {res.json(newSearchCount)}
        );
      } catch (error) {
        console.log("ERROR: ", error);
      }
}

exports.started = (req, res) => {
  try {
       Searchs.count ({where : {state_search : "Iniciada"}}).then(
      (startedSearchCount) => {res.json(startedSearchCount)}
      );
    } catch (error) {
      console.log("ERROR: ", error);
    }
}

exports.presented = (req, res) => {
  try {
       Searchs.count ({where : {state_search : "Presentada"}}).then(
      (presentedSearchCount) => {res.json(presentedSearchCount)}
      );
    } catch (error) {
      console.log("ERROR: ", error);
    }
}

exports.revision = (req, res) => {
  try {
       Searchs.count ({where : {state_search : "Revision"}}).then(
      (revisionSearchCount) => {res.status(200).json(revisionSearchCount)}
      );
    } catch (error) {
      console.log("ERROR: ", error);
    }
}

exports.closed = (req, res) => {
  try {
       Searchs.count ({where : {state_search : "Revision"}}).then(
      (closedSearchCount) => {res.status(200).json(closedSearchCount)}
      );
    } catch (error) {
      console.log("ERROR: ", error);
    }
}

// fin


//ranking reclutadores por area ordenados por rating
exports.recruitersArea = (req, res) => {
  const { areaValue } = req.body;
  console.log(areaValue)
  try {
    Recruiters.findAll({
      where: {
        area_rec : {
        [Op.like]: `%${areaValue}%`}
    },
      order:[ ["rating", "DESC"] ]
    }).then(
      (recruitersByArea) => {res.status(200).json(recruitersByArea)}
    )
 } catch (error) {
   console.log("ERROR: ", error);
 }
}

//Ranking General de Recruiters ordenados por rating
exports.topRecruiters= (req, res) => {
  try {
    Recruiters.findAll({
      order:[ ["rating", "DESC"] ]
    }).then(
      (topRecruiters) => {res.status(200).json(topRecruiters)}
    )
 } catch (error) {
   console.log("ERROR: ", error);
 }
}