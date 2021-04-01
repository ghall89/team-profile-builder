const Employee = require('./Employee');

class Intern extends Employee {
	constructor (name, email, school) {
		super(name, email);
		this.role = 'Intern';
		this.school = school;
	}
	getSchool() {
		return `School: ${this.school}`
	}
}

module.exports = Intern;