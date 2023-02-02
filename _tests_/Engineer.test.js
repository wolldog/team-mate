const Engineer = require('../lib/engineer')

describe("Engineer", () => {
    // Test for initialization of a new Engineer object
    describe("Initialization", () => {
      it("should create an object with a name, id, email, github username and have a role of 'Engineer' if provided valid arguments", () => {
        const engineer = new Engineer("Peter", 1, "peter@piper.com", "github", "Engineer");
  
        // Verify that the new object has the correct properties
        expect(engineer.getName()).toEqual("Peter");
        expect(engineer.getId()).toEqual(1);
        expect(engineer.getEmail()).toEqual("peter@piper.com");
        expect(engineer.getGitHub()).toEqual("github")
        expect(engineer.getRole()).toEqual("Engineer")
      });
  
     
      });
    });
