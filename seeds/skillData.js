const { Skill } = require("../models");

const skillData = [
  {
    skill_name: "Javascript",
  },
  {
    skill_name: "HTML",
  },
  {
    skill_name: "CSS",
  },
  {
    skill_name: "JQuery",
  },
];

const seedBlog = () => Skill.bulkCreate(skillData);

module.exports = seedBlog;
