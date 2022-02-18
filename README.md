![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

![lang](https://img.shields.io/github/languages/top/imanmansour86/portfolio-v3)
![repo size](https://img.shields.io/github/repo-size/imanmansour86/portfolio-v3)
![last commit](https://img.shields.io/github/last-commit/imanmansour86/portfolio-v3)

# Portfolio

This website shows Portfolio page. Users can view projects created by the portfolio owner, as well as contact the owner for information. Each project has a title, descriptions, and link to repo URL and demo URL/demo video. The website uses Handlebars.js as the templating language and Sequelize as the ORM.

## Deployed Link

- [Deployed](https://arcane-coast-56857.herokuapp.com/)

## Table of Contents

- [Portfolio](#portfolio)
  - [Deployed Link](#deployed-link)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)
  - [Features](#features)
  - [Built With](#built-with)
  - [Author](#author)
  - [License](#license)

## Usage

- Homepage

![Homepage]()

## Features

The website has 3 models, Employment, Skill, and Project. The data from the db is retrieved using GET request, then fed to the template engine to render the pages. Partial handlebars used to render individual sections like skills and employmnet. The app uses AOS animattion library to animate parts of the cards.

## Built With

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Expressjs](https://expressjs.com/)
- [Express-handlebars](https://www.npmjs.com/package/express-handlebars)
- [Sequelize](https://sequelize.org/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [AOS](https://michalsnik.github.io/aos/)

## Author

Iman Mansour

- [Github](https://github.com/imanmansour86)

## License

This project is licensed under the MIT License
