const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Intitialization", () => {
        it("should create a new Engineer object", () => {
            const engineer = new Engineer("Zeke", 81, "zeke@company.com", "zeke123");

            expect(engineer.github).toEqual("zeke123");
        })
    });

    describe("getRole", () => {
        it("should return a string 'Engineer' ", () => {
            const engineer = new Engineer("Zeke", 81, "zeke@company.com", "zeke123");

            const res = engineer.getRole();
            expect(res).toEqual("Engineer");
        })
    });
})