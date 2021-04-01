class Employee {
	constructor(name, email) {
		this.name = name;
		this.role = 'Employee';
		this.id = Math.floor(Math.random()*90000) + 10000;
		this.email = email;
	}
	getName() {
		return `Name: ${this.name}`;
	}
	getId() {
		return `ID#: ${this.id}`;
	}
	getEmail() {
		return `Email: ${this.email}`;
	}
	getRole() {
		return `Role: ${this.role}`
	}
}

module.exports = Employee;