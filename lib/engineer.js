const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
    super(name, id, email)
    this.gitHub = gitHub
}

getGitHub () 

getRole () {
    return 'Engineer';
}

}

module.exports = Engineer;