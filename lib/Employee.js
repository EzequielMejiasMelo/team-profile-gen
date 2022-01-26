class Employee {
    constructor(name, id, email){
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getName() {
        console.log(this.name);
    }

    getId(){
        console.log(this.id);
    }

    getEmail(){
        console.log(this.email);
    }

    getRole(){
        console.log("Employee");
    }
}

module.exports = Empl