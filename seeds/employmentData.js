const { Employment } = require("../models");

const employmentData = [
  {
    employeer: "Apple, Inc.",
    position: "Software QA Engineer",
    date: "2016-Current",
  },
];

const seedBlog = () => Employment.bulkCreate(employmentData);

module.exports = seedBlog;
