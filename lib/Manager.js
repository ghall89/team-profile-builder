const Employee = require('./Employee');

class Manager extends Employee {
	constructor (name, email, officeNumber) {
		super(name, email);
		this.role = 'Manager';
		this.officeNumber = officeNumber;
	}
}

module.exports = Manager;