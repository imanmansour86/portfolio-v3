const { Employment } = require("../models");

const employmentData = [
  {
    employeer: "Apple, Inc.",
    position: "Software QA Engineer",
  },
];

const seedBlog = () => Employment.bulkCreate(employmentData);

module.exports = seedBlog;
