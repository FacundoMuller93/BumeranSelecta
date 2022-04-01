"use strict"
const fakeRecruiters = require("./fake_recruiters.json")

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "recruiters", fakeRecruiters,
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recruiters', null, {});
  },
}

// Seed Recruiters (desde "/api"): npm run seed
