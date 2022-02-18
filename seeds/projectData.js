const { Project } = require("../models");

const projectData = [
  {
    title: "Get Moving",
    description:
      "Social exercise activity app that allows users to add and view activities, as well as signup for activities. Built using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication",
    repo_url: "https://github.com/imanmansour86/get-moving",
    deployed_url: "https://pacific-wildwood-76799.herokuapp.com/",
    project_image: "getmoving.png",
  },
  {
    title: "Tech blog",
    description:
      "CMS-style blog site where users can publish blog posts and comment on other’ posts . The app uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication",
    repo_url: "https://github.com/imanmansour86/tech-blog",
    deployed_url: "https://quiet-mesa-73726.herokuapp.com/",
    project_image: "tech.png",
  },

  {
    title: "Map-a-Test",
    description:
      "Location based COVID tests app that shows testing location near you based on user's lat/lng or an address. The test site is displayed as a marker on the map with test locations in infowindow",
    repo_url: "https://github.com/imanmansour86/find-covid-testing",
    deployed_url: "https://laurendarrimon.github.io/find-covid-testing/",
    project_image: "map.png",
  },

  {
    title: "Employee-Tracker",
    description:
      "A command-line application that manages a company's employee database. It allows to easily view and interact with employee information stored in databases. The application is built using Node.js, Inquirer, and MySQL",
    repo_url: "https://github.com/imanmansour86/Employee-Tracker",
    deployed_url: "https://watch.screencastify.com/v/NEtzeYUpvafSa7xJlmxW",
    project_image: "tracker.png",
  },

  {
    title: "Code quiz",
    description:
      "A timed quiz coding app about JavaScript fundamentals. It runs in the browser and features dynamically updated content powered by Javascript",
    repo_url: "https://github.com/imanmansour86/code-quiz",
    deployed_url: "https://imanmansour86.github.io/code-quiz/",
    project_image: "quiz.png",
  },
];

const seedBlog = () => Project.bulkCreate(projectData);

module.exports = seedBlog;
