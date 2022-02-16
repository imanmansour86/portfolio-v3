const { Project } = require("../models");

const projectData = [
  {
    title: "2 mile walk around the park",
    description: "Morning walk around the park, bring your dogs!",
    repo_url: "March 30, 2022",
    deployed_url: "John D. Morgan Park",
    project_image:
      "https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg",
  },
];

const seedBlog = () => Project.bulkCreate(projectData);

module.exports = seedBlog;
