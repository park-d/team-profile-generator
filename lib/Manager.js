// importing in the Employee parent class
const Employee = require("./Employee");

//extending Employee parent class for a Manager employee with new "officeNumber"
class Manager extends Employee {
    constructor(inputName, id, email, officeNumber) {
        super(inputName, id, email);
        this.officeNumber = officeNumber;
    }
    
// method to return the input officeNumber
    getOfficeNumber() {
        return this.officeNumber;
    }

// new method for overwriting which type of employee it is, by returning the name of this current function 
    getRole() {
        return Manager.name;
    }
    
// new method that holds the code for the manager HTML card
    renderHTML() {
        return `
       <div class = "col-sm-12 col-md-6 col-lg-4 py-3">
        <div class="card shadow">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">${this.inputName}</h5>
                <h3 class="card-text"><i class="bi bi-cup-hot-fill"></i> ${this.getRole()}</p>
            </div>
            <div class = "card-body bg-light">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: <a href="mailto:email@email.com">${this.email}</a></li>
                <li class="list-group-item">Office: ${this.officeNumber}</li>
            </ul>
            </div>
        </div>
        </div>`;
    }
}

module.exports = Manager;
