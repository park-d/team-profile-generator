// created Employee parent class for all other extended classes, with properties name, id, and email
class Employee {
    constructor(inputName, id, email) {
        this.inputName = inputName;
        this.id = id;
        this.email = email;
    };

//method to return the input name
    getName() {
        return this.inputName;
    };

// method to return the input id
    getId() {
        return this.id;
    };

// method to return the input email
    getEmail() {
        return this.email;
    };

// method to return which type of employee it is, by returning the name of the function 
    getRole() {
        return Employee.name;
    };
}

module.exports = Employee;
