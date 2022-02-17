const { Skill } = require("../models");

const skillData = [
  {
    skill_name: "HTML5",
  },
  {
    skill_name: "CSS",
  },
  {
    skill_name: "Bootstrap",
  },
  {
    skill_name: "Javascript",
  },
  {
    skill_name: "JQuery",
  },
  {
    skill_name: "MYSQL",
  },
  {
    skill_name: "REST API",
  },
  {
    skill_name: "Sequelize",
  },
  {
    skill_name: "Express",
  },
  {
    skill_name: "Nodejs",
  },
  {
    skill_name: "Handlebars",
  },
];

const seedBlog = () => Skill.bulkCreate(skillData);

module.exports = seedBlog;
