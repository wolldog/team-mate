const Employee = require('../lib/employee')



describe("Employee", () => {
  // Test for initialization of a new Employee object
  describe("Initialization", () => {
    it("should create an object with a name, id and email if provided valid arguments", () => {
      const employee = new Employee("Peter", 1, "peter@piper.com");

      // Verify that the new object has the correct properties
      expect(employee.getName()).toEqual("Peter");
      expect(employee.getId()).toEqual(1);
      expect(employee.getEmail()).toEqual("peter@piper.com");
      expect(employee.getRole()).toEqual("Employee")
    });

   
    });
  });



