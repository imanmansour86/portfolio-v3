![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

![lang](https://img.shields.io/github/languages/top/imanmansour86/portfolio-v3)
![repo size](https://img.shields.io/github/repo-size/imanmansour86/portfolio-v3)
![last commit](https://img.shields.io/github/last-commit/imanmansour86/portfolio-v3)

# Portfolio

This website shows Portfolio page. Users can view projects created by the portfolio owner, as well as contact the owner for information. Each project has a title, descriptions, and link to repo URL and demo URL/demo video. The website uses Sequelize as the ORM with client side JS that request JSON from API routes from the database query.

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

![Homepage](/public/images/home.png)

## Features

The website has 3 models, Employment, Skill, and Project. The data from the db is retrieved using GET request as JSON, then fed to the clientjs engine to render the html. The app uses AOS animattion library to animate parts of the html.

## Built With

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Expressjs](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [AOS](https://michalsnik.github.io/aos/)

## Author

Iman Mansour

- [Portfolio](https://imanmansour86.github.io/new-portfolio/)
- [Github](https://github.com/imanmansour86)
- [LinkedIn](https://www.linkedin.com/in/iman-mansour-51391515/)
- [Email](mailto:imanmansour86@gmail.com)

## License

This project is licensed under the MIT License
