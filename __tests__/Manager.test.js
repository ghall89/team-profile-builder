const Manager = require('../lib/Manager');

test ('creates manager', () => {
	const manager = new Manager('Steve', 'steve@company.com', '12-B');
	
	expect(manager.name).toBe('Steve');
	expect(manager.id).toEqual(expect.any(Number));
	expect(manager.email).toBe('steve@company.com');
	expect(manager.officeNumber).toBe('12-B');
}); 

test ('gets manager name', () => {
	const manager = new Manager('Steve', 'steve@company.com', '12-B');
	
	expect(manager.getName()).toEqual('Name: Steve');
});

test ('gets manager id', () => {
	const manager = new Manager('Steve', 'steve@company.com', '12-B');
	
	expect(manager.getId()).toEqual(`ID#: ${manager.id}`);
});

test ('gets manager email', () => {
	const manager = new Manager('Steve', 'steve@company.com', '12-B');
	
	expect(manager.getEmail()).toEqual('Email: steve@company.com');
});

test ('gets manager role', () => {
	const manager = new Manager('Steve', 'steve@company.com', '12-B');
	
	expect(manager.getRole()).toBe('Role: Manager');
});