const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Intitialization", () => {
        it("should create a new Intern object", () => {
            const intern = new Intern("Dave", 123, "zeke@company.com", "UCF");

            expect(intern.school).toEqual("UCF");
        })
    });

    describe("getRole", () => {
        it("should return a string 'Intern' ", () => {
            const intern = new Intern("Dave", 123, "dave@company.com", "UCF");

            const res = intern.getRole();
            expect(res).toEqual("Intern");
        })
    });
})