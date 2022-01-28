const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe('Initialization', () => {
        it("should create a new Employee object", () =>{
            const employee = new Employee('Katie', 17, 'katie@company.com');

            expect(employee.name).toEqual('Katie');
            expect(employee.id).toEqual(17);
            expect(employee.email).toEqual('katie@company.com');
        });
    });

    describe('getName', () => {
        it("should return the name property for the object", () => {
            const employee = new Employee('Katie', 17, 'katie@company.com');

            const res = employee.getName();
            expect(res).toEqual("Katie");
        })
    });

    describe('getId', () => {
        it("should return the id property for the object", () => {
            const employee = new Employee('Katie', 17, 'katie@company.com');

            const res = employee.getId();
            expect(res).toEqual(17);
        })
    });

    describe('getEmail', () => {
        it("should return the email property for the object", () => {
            const employee = new Employee('Katie', 17, 'katie@company.com');

            const res = employee.getEmail();
            expect(res).toEqual("katie@company.com");
        })
    });

    describe('getRole', () => {
        it("should return a string 'Employee' ", () => {
            const employee = new Employee('Katie', 17, 'katie@company.com');

            const res = employee.getRole();
            expect(res).toEqual("Employee");
        })
    });
})