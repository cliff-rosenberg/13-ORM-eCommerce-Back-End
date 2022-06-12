# ORM eCommerce Back End

## Table of Contents-
- [ORM eCommerce Back End](#orm-ecommerce-back-end)
  - [Table of Contents-](#table-of-contents-)
  - [Licensing](#licensing)
  - [Description](#description)
  - [Installation](#installation)
  - [Screenshots](#screenshots)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [Additional Info](#additional-info)

## Licensing

[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

Link: [MIT License](https://opensource.org/licenses/MIT)

## Description

This application is an API "back-end" interface with a MySQL database. It provides the following basic functions which accept data and return data in JSON format:  

* GET all Categories   
* GET a Category by ID  
* CREATE a new Category  
* UPDATE a Category name by ID  
* DELETE a Category by ID  
* GET all Products  
* GET Product info by ID  
* CREATE a new Product  
* UPDATE a Product by ID  
* DELETE a Product by ID  
* GET all Tags  
* GET a Tag by ID  
* CREATE a new Tag  
* UPDATE a Tag by ID  
* DELETE a Tag by ID
     
## Installation

This app uses Node.js, the package.json file has all the dependencies inside. Copying the directory sturcture as-is and going to the root level then running the command 'npm install' will collect the required modules and install them.

## Screenshots

YouTube link to video walk-through of application: [https://youtu.be/z4XexVOhS1U](https://youtu.be/z4XexVOhS1U)

Because this is an API/back-end application, there is no screenshot of it. See the YouTube video runthrough to see how the API produces and accepts data in JSON format.

## Usage

The app is launched by entering "node server.js" in the command window when inside the directory holding files. The API interface is accessed through HTTP methods of GET, POST, PUT and DELETE. The database is accessed via Sequelize from these methods/routes.

## Credits

This application uses the following technologies/libraries:  

[Express.js v4.0](https://expressjs.com/)

[Sequelize v6](https://sequelize.org/)

[MySQL v8.0](https://www.mysql.com/)

[dotenv](https://www.npmjs.com/package/dotenv)

Also, many thanks to my class instructor [Farish Kashefinejad](https://www.linkedin.com/in/farishkash) for his continued efforts to detail for his students the "problem solving process" through his Structured Reviews of these homework assignments.

## Contributing

  [Contributor Covenant](https://www.contributor-covenant.org/)

## Testing

  No testing is provided.

## Additional Info

- Github: [cliff-rosenberg](https://github.com/cliff-rosenberg)
- Email: cliff459@icloud.com