const Intern = require('../lib/Intern');

test ('creates intern', () => {
	const intern = new Intern('Steve', 'steve@company.com', 'URI');
	
	expect(intern.name).toBe('Steve');
	expect(intern.id).toEqual(expect.any(Number));
	expect(intern.email).toBe('steve@company.com');
	expect(intern.school).toBe('URI');
	
}); 

test ('gets intern name', () => {
	const intern = new Intern('Steve', 'steve@company.com', 'URI');
	
	expect(intern.getName()).toEqual('Name: Steve');
});

test ('gets intern id', () => {
	const intern = new Intern('Steve', 'steve@company.com', 'URI');
	
	expect(intern.getId()).toEqual(`ID#: ${intern.id}`);
});

test ('gets intern email', () => {
	const intern = new Intern('Steve', 'steve@company.com', 'URI');
	
	expect(intern.getEmail()).toEqual('Email: steve@company.com');
});

test ('gets intern role', () => {
	const intern = new Intern('Steve', 'steve@company.com', 'URI');
	
	expect(intern.getRole()).toBe('Role: Intern');
});

test('get intern school', () => {
	const intern = new Intern('Steve', 'steve@company.com', 'URI');
	
	expect(intern.getSchool()).toBe('School: URI')
})