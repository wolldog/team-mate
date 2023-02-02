const Manager = require('../lib/manager')

describe("Manager", () => {
    // Test for initialization of a new Employee object
    describe("Initialization", () => {
      it("should create an object with a name, id, email, office number and have a role of 'Manager' if provided valid arguments", () => {
        const manager = new Manager("Peter", 1, "peter@piper.com", "4563", "Manager");
  
        // Verify that the new object has the correct properties
        expect(manager.getName()).toEqual("Peter");
        expect(manager.getId()).toEqual(1);
        expect(manager.getEmail()).toEqual("peter@piper.com");
        expect(manager.getOfficeNumber()).toEqual("4563")
        expect(manager.getRole()).toEqual("Manager")
      });
  
     
      });
    });