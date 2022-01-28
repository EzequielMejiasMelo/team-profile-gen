const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./question");
const generateHTML = require("./src/generateDoc");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const team = [];

//Generates manager and calls menu function
function init() {

    async function generateManager() {
        const res = await inquirer.prompt(questions.managerQuestions);

        const {name, id, email, officeNumber} = res;
        const manager = new Manager(name, id, email, officeNumber);
        team.push(manager);
        let addTeam = true;
        while (addTeam) {
            const additions = await menu();
            if(additions.generate){
                if(additions.role === "Engineer"){ await generateEngineer()}
                if(additions.role === "Intern"){ await generateIntern()}
            }
            addTeam = additions.generate;
        }
        const pageContent = await generateHTML(team);
        return await writeFile(pageContent);
    }

    async function generateEngineer() {
        const res = await inquirer.prompt(questions.engineerQuestions);

        const {name, id, email, github} = res;
        const engineer = new Engineer(name, id, email, github);
        team.push(engineer);
    }

    async function generateIntern() {
        const res = await inquirer.prompt(questions.internQuestions);

        const {name, id, email, school} = res;
        const intern = new Intern(name, id, email, school);
        team.push(intern);
    }

    async function menu(){
        return await inquirer.prompt(questions.menuQuestions);
    }

    generateManager()
}

init();

const writeFile = (html) => {
    fs.writeFile("./dist/index.html", html, (e) => e? console.log(e): console.log("Team profile has been generated."))
} 