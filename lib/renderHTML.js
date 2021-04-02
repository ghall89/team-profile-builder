const fs = require ('fs');
const userInput = require ('./getInput');
const template = require('../src/template')

const divideRoles = (employees, managerArr, employeeArr, engineerArr, internArr) => {
	for (let i = 0; i < employees.length; i++) {
		if (employees[i].role === "Manager") {
			managerArr.push(employees[i]);
		} else if (employees[i].role === "Engineer") {
			engineerArr.push(employees[i]);
		} else if (employees[i].role === "Intern") {
			internArr.push(employees[i]);
		} else {
			employeeArr.push(employees[i]);
		}
	}
};

const pickFourthLine = (array, i) => {
	if (array[i].role === "Manager") {
		return `<p>Office: ${array[i].officeNumber}</p>`
	} else if (array[i].role === "Engineer") {
		return `<p>GitHub: ${array[i].github}</p>`
	} else if (array[i].role === "Intern") {
		return `<p>School: ${array[i].school}</p>`
	} else {
		return '';
	}
}

const contstructSections = (array) => {
	const result = [];
	for (let i = 0; i < array.length; i++) {
		
		const fourthLine = pickFourthLine(array, i);
		
		const html = `
<div class="uk-child-width-expand@s uk-text-center" uk-grid>
	<div>
		<div class="uk-card uk-card-default uk-card-body uk-width-1-3@m">
			<div class="uk-card-header">
				<div class="uk-card-badge uk-label">ID: ${array[i].id}</div>
				<h3 class="uk-card-title">${array[i].name}</h3>
			</div>
			<p>Email: ${array[i].email}</p>
			${fourthLine}
		</div>
	</div>
</div>
		`;
		result.push(html);
	}
	
	return result.join("\n")
	
}

const renderHTML = (employees) => {
	
	const managerArr = []
	const employeeArr = []
	const engineerArr = []
	const internArr = []
	
	divideRoles(employees, managerArr, employeeArr, engineerArr, internArr);
	
	const managerHTML = contstructSections(managerArr);
	const employeeHTML = contstructSections(employeeArr);
	const engineerHTML = contstructSections(engineerArr);
	const internHTML = contstructSections(internArr);
	
	const finalHTML = template(managerHTML, employeeHTML, engineerHTML, internHTML);
	
	fs.writeFile('./dist/index.html', finalHTML, (err) => {
		if (err) {
			return err;
		}
		console.log('Page successfully created!');
	});
	
};

module.exports = renderHTML;
