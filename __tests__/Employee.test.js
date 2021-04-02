const Employee = require('../lib/Employee');

test ('creates employee', () => {
	const employee = new Employee('Steve', 'steve@company.com');
	
	expect(employee.name).toBe('Steve');
	expect(employee.id).toEqual(expect.any(Number));
	expect(employee.email).toBe('steve@company.com');
	
}); 

test ('gets employee name', () => {
	const employee = new Employee('Steve', 'steve@company.com');
	
	expect(employee.getName()).toBe('Name: Steve');
});

test ('gets employee id', () => {
	const employee = new Employee('Steve', 'steve@company.com');
	
	expect(employee.getId()).toEqual(`ID#: ${employee.id}`);
});

test ('gets employee email', () => {
	const employee = new Employee('Steve', 'steve@company.com');
	
	expect(employee.getEmail()).toEqual('Email: steve@company.com');
});

test ('gets employee role', () => {
	const employee = new Employee('Steve', 'steve@company.com');
	
	expect(employee.getRole()).toBe('Role: Employee');
});