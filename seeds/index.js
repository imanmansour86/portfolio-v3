const sequelize = require("../config/connection");
const seedProject = require("./projectData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedProject();

  process.exit(0);
};

seedAll();
