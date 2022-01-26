const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter the manager's name",
        //validate
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the manager's id",
        //validate
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the manager's email",
        //validate
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the manager's office number",
        //validate
    }
];

const menuQuestions = [
    {
        type: 'confirm',
        name: 'generate',
        message: 'Would you like to add team members?',
        //validate
    },
    {
        type: 'list',
        name: 'choice',
        message: 'What kind of team member would you like to generate?',
        choices: ['Engineer', 'Intern'],
        //validate
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the engineer's name",
        //validate
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the engineer's id",
        //validate
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the engineer's email",
        //validate
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter the engineer's github username",
        //validate
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the intern's name",
        //validate
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the intern's id",
        //validate
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the intern's email",
        //validate
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter the intern's school",
        //validate
    }
];

exports.managerQuestions = managerQuestions;
exports.menuQuestions = menuQuestions;
exports.engineerQuestions = engineerQuestions;
exports.internQuestions = internQuestions;