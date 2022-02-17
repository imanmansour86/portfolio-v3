const sequelize = require("../config/connection");
const seedProject = require("./projectData");
const seedEmployment = require("./employmentData");
const seedSkill = require("./skillData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedProject();
  await seedEmployment();
  await seedSkill();

  process.exit(0);
};

seedAll();
