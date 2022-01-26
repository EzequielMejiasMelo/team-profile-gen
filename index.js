const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const question = require("./question");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

//Generates manager and calls menu function
function init() {
    inquirer.prompt(question.managerQuestions).then(({name, id, email, officeNumber}) =>{
        const manager = new Manager(name, id, email, officeNumber);
        console.log(manager);
        // menu();
    });
    return;
}

function menu(){
    return;
}

init();