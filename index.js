//import classes and modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateDoc");
const inquirer = require("inquirer");
const fs = require("fs");

//import inquirer questions
const questions = require("./question");

const team = [];

//Generates manager and calls menu function
function init() {

    //Generaes
    async function generateManager() {

        //generates Manager object
        const res = await inquirer.prompt(questions.managerQuestions);
        const {name, id, email, officeNumber} = res;
        const manager = new Manager(name, id, email, officeNumber);
        team.push(manager);

        // Prompts if we need to add more team members
        let addTeam = true;
        while (addTeam) {
            const additions = await menu();
            if(additions.generate){
                if(additions.role === "Engineer"){ await generateEngineer()}
                if(additions.role === "Intern"){ await generateIntern()}
            }
            addTeam = additions.generate;
        }

        //Sends team array to generateHTML for page generation
        const pageContent = await generateHTML(team);
        return await writeFile(pageContent);
    }

    //generates Engineer object
    async function generateEngineer() {
        const res = await inquirer.prompt(questions.engineerQuestions);

        const {name, id, email, github} = res;
        const engineer = new Engineer(name, id, email, github);
        team.push(engineer);
    }

    //generates Intern Object
    async function generateIntern() {
        const res = await inquirer.prompt(questions.internQuestions);

        const {name, id, email, school} = res;
        const intern = new Intern(name, id, email, school);
        team.push(intern);
    }

    //Prompts if more objects need to be created and if so what role
    async function menu(){
        return await inquirer.prompt(questions.menuQuestions);
    }

    generateManager()
}

//Writes index.html file if success else logs error
const writeFile = (html) => {
    fs.writeFile("./dist/index.html", html, (e) => e? console.log(e): console.log("Team profile has been generated."))
}

//initialize app
init();