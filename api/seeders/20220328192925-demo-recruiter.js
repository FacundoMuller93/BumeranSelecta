"use strict"
const fakeRecruiters = require("./fake_recruiters.json")

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Recruiters", fakeRecruiters,
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Recruiters', null, {});
  },
}

// Seed Recruiters (desde "/api"): npm run seed
