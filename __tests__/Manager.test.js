const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Intitialization", () => {
        it("should create a new Manager object", () => {
            const manager = new Manager("John", 63, "john@company.com", 12);

            expect(manager.officeNumber).toEqual(12);
        })
    });

    describe("getRole", () => {
        it("should return a string 'Manager' ", () => {
            const manager = new Manager("John", 63, "john@company.com", 12);

            const res = manager.getRole();
            expect(res).toEqual("Manager");
        })
    });
})