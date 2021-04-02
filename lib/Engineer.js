const Employee = require('./Employee');

class Engineer extends Employee {
	constructor (name, email, github) {
		super(name, email);
		this.role = 'Engineer';
		this.github = github;
	}
	getGithub() {
		return `GitHub: ${this.github}`
	}
}



module.exports = Engineer;