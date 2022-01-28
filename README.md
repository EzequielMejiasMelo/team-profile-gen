# team-profile-gen
  [![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  
  ## Description
  
  A CLI application created to generate a team profile web page based on user input. This application implements the `Inquirer` module from `Node.js`
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Testing](#testing)
  * [License](#license)
    
## Installation
    
First, you have to use `git clone` to create a local copy of the repository on your file system. Run `npm install` to install all of the necessary dependencies identified in `package.json`.

To start the application, run `node index.js` in the command line. Answer the prompts by providing the team information so the profiles can be created. Once answered, your HTML file will be named `index.html` and will be located in the `dist` folder.
    
## Usage

![An image of a sample html file generated.](./assets/team-profile-demo.jpg)

[Check out this link for a video demo](https://drive.google.com/file/d/1mp2jWRMfq4tP3v7oqkojuNhKE6rTuUpf/view?usp=sharing)

When you run `node index.js`, the application uses `inquirer` package to prompt you in the command line. Once these are entered, the reponses are passed to the application to generate the HTML. The generation for the HTML takes into account your reponses and will not create cards for team mebers that you did not provide an answer for.

Lastly, the `fs` module will then write the generated HTML to your project's `index.html` file. See my example name `index.html` located in the `dist` folder in the repository.

## Testing

Run `npm test` to run Jest.
    
  
  ## License
  
  [MIT License](https://opensource.org/licenses/MIT)
  
  ## Support
  
  Contact me if you have any questions
  - GitHub: [@EzequielMejiasMelo](https://github.com/EzequielMejiasMelo)
  - Email: [ezequiel.mejiasmelo@gmail.com](ezequiel.mejiasmelo@gmail.com)