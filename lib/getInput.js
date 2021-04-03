//import classes
const Employee = require('./Employee')
const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Intern = require('./Intern')
//import HTML generator
const renderHTML = require('./renderHTML')
//import inquirer
const inquirer = require('inquirer')

const employees = [];

// Get user inputs
const userInput = () => {
	inquirer
		.prompt([
			{
				type: 'list',
				name: 'role',
				message: 'What is the role of the new employee?',
				choices: ['Manager', 'Engineer', 'Employee', 'Intern']
			},
			{
				type: 'input',
				name: 'name',
				message: 'What is their name?',
				validate: nameInput => {
					if (nameInput) {
						return true;
					} 
					console.log('Please enter a name!');
					return false;
				}
			},
			{
				type: 'input',
				name: 'email',
				message: 'What is their email?',
				validate: emailInput => {
					// validate email by searching for an @
					if (emailInput){
						const checkArr = emailInput.split('')
						for (let i = 0; i < checkArr.length; i++) {
							if (checkArr[i] === '@') {
								return true;
							}
						}
						console.log('Please enter a valid email!');
						return false;
					}
					console.log('Please enter an email!');
					return false;
				}
			},
			{
				type: 'input',
				name: 'office',
				message: 'What is their office number?',
				when: answers => {
					return answers.role === 'Manager';
				},
				validate: officeInput => {
					if (officeInput) {
						return true;
					}
					console.log('Please enter an office number!');
					return false;
				}
			},
			{
				type: 'input',
				name: 'github',
				message: 'What is their GitHub username?',
				when: answers => {
					return answers.role === 'Engineer';
				},
				validate: githubInput => {
					if (githubInput) {
						return true;
					}
					console.log('Please enter a github username!');
					return false;
				}
			},
			{
				type: 'input',
				name: 'school',
				message: 'What is their school name?',
				when: answers => {
					return answers.role === 'Intern';
				},
				validate: schoolInput => {
					if (schoolInput) {
						return true;
					}
					console.log('Please enter a school name!');
					return false;
				}
			},
			{
				type: 'confirm',
				name: 'goAgain',
				message: 'Would you like to enter another employee?'
			}
		])		
		.then(answers => {
			
			// create object from class based on what the user selected for 'role'
			let newEmployee;
			if (answers.role === 'Employee') {
				newEmployee = new Employee(answers.name, answers.email);
			} else if (answers.role === 'Manager') {
				newEmployee = new Manager(answers.name, answers.email, answers.office);
			} else if (answers.role === 'Engineer') {
				newEmployee = new Engineer(answers.name, answers.email, answers.github);
			} else if (answers.role === 'Intern') {
				newEmployee = new Intern(answers.name, answers.email, answers.school);
			}
			
			// push employee object to an array
			employees.push(newEmployee);
			
			// check if user chose to create another employee
			if (answers.goAgain) {
				userInput();
			} else {
				renderHTML(employees);
			}
		})
		.catch(error => {
			if(error.isTtyError) {
				console.log(error);
			} else {
				console.log(error);
			}
		});
		

}

module.exports = userInput;