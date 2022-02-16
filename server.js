//Requirements
const path = require("path");
const express = require("express");
const routes = require("./controllers");
const exphbs = require("express-handlebars");

const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Set up Handlebars for express
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
