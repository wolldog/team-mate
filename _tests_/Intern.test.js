

const Intern = require('../lib/intern')

describe("Intern", () => {
    // Test for initialization of a new Intern object
    describe("Initialization", () => {
      it("should create an object with a name, id, email, school and have a role of 'Intern' if provided valid arguments", () => {
        const intern = new Intern("Peter", 1, "peter@piper.com", "USYD", "Intern");
  
        // Verify that the new object has the correct properties
        expect(intern.getName()).toEqual("Peter");
        expect(intern.getId()).toEqual(1);
        expect(intern.getEmail()).toEqual("peter@piper.com");
        expect(intern.getSchool()).toEqual("USYD")
        expect(intern.getRole()).toEqual("Intern")
      });
  
     
      });
    });