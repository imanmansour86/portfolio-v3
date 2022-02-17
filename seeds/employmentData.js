const { Employment } = require("../models");

const employmentData = [
  {
    employeer: "Apple",
    position: "Software QA Engineer",
  },
];

const seedBlog = () => Employment.bulkCreate(employmentData);

module.exports = seedBlog;
