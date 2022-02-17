const { Project } = require("../models");

const projectData = [
  {
    title: "Get Moving",
    description:
      "Social exercise activity app the allows users to add and view activities, as well as signup for activities.Built using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication",
    repo_url: "https://github.com/imanmansour86/get-moving",
    deployed_url: "https://pacific-wildwood-76799.herokuapp.com/",
    project_image:
      "https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg",
  },
];

const seedBlog = () => Project.bulkCreate(projectData);

module.exports = seedBlog;
