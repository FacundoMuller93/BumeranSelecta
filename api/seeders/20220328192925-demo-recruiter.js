"use strict"
const fakeRecruiters = require("./fake_recruiters.json")
const fakeSearchs = require("./fake-searchs.json")

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "recruiters", fakeRecruiters,
      {}
    )
    await queryInterface.bulkInsert(
      "searchs", fakeSearchs,
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recruiters', null, {});
    await queryInterface.bulkDelete('searchs', null, {});
  },
}

// Seed Recruiters (desde "/api"): npm run seed