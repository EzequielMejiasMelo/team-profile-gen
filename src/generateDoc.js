const generatePage = (teamCards) => {
    const doc = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <title>Team Profile</title>
    </head>
    
    <body>
        <header class="container is-fluid has-background-danger has-text-white has-text-centered is-size-1 py-6">
            <h1>Team Profiles</h1>
        </header>
        <main class="container is-fluid">
            <section id="cards" class="p-6">
                <!-- Team Cards -->
                ${teamCards}
            </section>
        </main>
    </body>
    </html>`;

    return doc;
}

const managerCard = (manager) => {
    const card = `<div class="column">
    <div class="card">
        <header class="card-header has-background-info">
            <h2 class="card-header-title has-text-white">
                ${manager.name}
                <br>
                Manager
            </h2>
        </header>
        <div class="card-content">
            <div class="content">
                <table class="table">
                    <tbody>
                        <tr><td>ID: ${manager.id}</td></tr>
                        <tr><td>Email: ${manager.email}</td></tr>
                        <tr><td>Office number: ${manager.officeNumber}</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>`

    return card;
}

const engineerCard = (engineer) => {
    const card = `<div class="column">
    <div class="card">
        <header class="card-header has-background-info">
            <h2 class="card-header-title has-text-white">
                ${engineer.name}
                <br>
                Engineer
            </h2>
        </header>
        <div class="card-content">
            <div class="content">
                <table class="table">
                    <tbody>
                        <tr><td>ID: ${engineer.id}</td></tr>
                        <tr><td>Email: ${engineer.email}</td></tr>
                        <tr><td>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>`

    return card;
}

const internCard = (intern) => {
    const card = `<div class="column">
    <div class="card">
        <header class="card-header has-background-info">
            <h2 class="card-header-title has-text-white">
                ${intern.name}
                <br>
                Intern
            </h2>
        </header>
        <div class="card-content">
            <div class="content">
                <table class="table">
                    <tbody>
                        <tr><td>ID: ${intern.id}</td></tr>
                        <tr><td>Email: ${intern.email}</td></tr>
                        <tr><td>School: ${intern.school}</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>`

    return card;
}

const generateHTML = (team) => {
    const cards = [];

    for (let i=0; i<team.length; i++){
        let employee = team[i];

        let role = employee.getRole();

        switch (role){
            case 'Manager':
                cards.push(managerCard(employee));
            case 'Engineer':
                cards.push(engineerCard(employee));
            case 'Intern':
                cards.push(internCard(employee));
        }
    }

    //add fix for columns

    const teamCards = cards.join("");
    return generatePage(teamCards); 
    
}

module.exports = generateHTML;


//Example Card

{/* <div class="columns">
                <div class="column">
                    <div class="card">
                        <header class="card-header has-background-info">
                            <h2 class="card-header-title has-text-white">
                                Jared
                                <br>
                                Manager
                            </h2>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <table class="table">
                                    <tbody>
                                        <tr><td>ID: 1</td></tr>
                                        <tr><td>Email: zeke@gmail.com</td></tr>
                                        <tr><td>Office number: 1</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> */}