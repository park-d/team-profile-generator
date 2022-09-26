// importing in the Employee parent class
const Employee = require('./Employee');

//extending Employee parent class for an Engineer employee with new "github"
class Engineer extends Employee {
    constructor(inputName, id, email, github) {
        super(inputName, id, email);
        this.github = github;
    }

// method to return the input github name
    getGithub() {
        return this.github;
    }

// new method for overwriting which type of employee it is, by returning the name of this current function
    getRole() {
        return Engineer.name;
    }

// new method that holds the code for the Engineer HTML card
    renderHTML() {
        return `
       <div class = "col-sm-12 col-md-6 col-lg-4 py-3">
        <div class="card shadow">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">${this.inputName}</h5>
                <h3 class="card-text"><i class="bi bi-laptop-fill"></i> ${this.getRole()}</p>
            </div>
            <div class = "card-body bg-light">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: <a href="mailto:email@email.com">${this.email}</a></li>
                <li class="list-group-item">GitHub: <a target = "_blank" href="https://github.com/${this.github}/"> ${this.github}</a></li>
            </ul>
            </div>
        </div>
        </div>`;
    }
}

module.exports = Engineer;
