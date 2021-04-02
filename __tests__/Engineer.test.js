const Engineer = require('../lib/Engineer');

test ('creates engineer', () => {
	const engineer = new Engineer('Steve', 'steve@company.com', 'steve123');
	
	expect(engineer.name).toBe('Steve');
	expect(engineer.id).toEqual(expect.any(Number));
	expect(engineer.email).toBe('steve@company.com');
	expect(engineer.github).toBe('steve123');
	
}); 

test ('gets engineer name', () => {
	const engineer = new Engineer('Steve', 'steve@company.com', 'steve123');
	
	expect(engineer.getName()).toEqual('Name: Steve');
});

test ('gets engineer id', () => {
	const engineer = new Engineer('Steve', 'steve@company.com', 'steve123');
	
	expect(engineer.getId()).toEqual(`ID#: ${engineer.id}`);
});

test ('gets engineer email', () => {
	const engineer = new Engineer('Steve', 'steve@company.com', 'steve123');
	
	expect(engineer.getEmail()).toEqual('Email: steve@company.com');
});

test ('gets engineer role', () => {
	const engineer = new Engineer('Steve', 'steve@company.com', 'steve123');
	
	expect(engineer.getRole()).toBe('Role: Engineer');
});

test ('gets engineer github', () => {
	const engineer = new Engineer('Steve', 'steve@company.com', 'steve123');
	
	expect(engineer.getGithub()).toBe('GitHub: steve123');
})