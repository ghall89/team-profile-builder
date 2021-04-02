const template = (managerHTML, employeeHTML, engineerHTML, internHTML) => {
	return `
	
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Team Profiles</title>
	<!-- UIkit CSS -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.6.18/dist/css/uikit.min.css" />

	<!-- UIkit JS -->
	<script src="https://cdn.jsdelivr.net/npm/uikit@3.6.18/dist/js/uikit.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/uikit@3.6.18/dist/js/uikit-icons.min.js"></script>
</head>
<body>
	
	<div class="uk-container uk-padding">
		<h1 class="uk-heading-divider">Team Profiles</h1>
		
		<div class="uk-background-muted" uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky>
			<nav class="uk-navbar-container" uk-navbar>
				<div class="uk-navbar-left">
						<ul class="uk-navbar-nav">
								<li><a href="#managers" uk-scroll offset="35">Managers</a></li>
								<li><a href="#employees" uk-scroll offset="35">Employees</a></li>
								<li><a href="#engineers" uk-scroll offset="35">Engineers</a></li>
								<li><a href="#interns" uk-scroll offset="35">Interns</a></li>
						</ul>
				</div>
			</nav>
		</div>

		<section class="uk-section-muted uk-padding" id="managers">
			<h2>Managers</h2>
			${managerHTML}
		</section>
		
		<section class="uk-section-muted uk-padding" id="employees">
			<h2>Employees</h2>
			${employeeHTML}
		</section>
		
		<section class="uk-section-muted uk-padding" id="engineers">
			<h2>Engineers</h2>
			${engineerHTML}
		</section>
		
		<section class="uk-section-muted uk-padding" id="interns">
			<h2>Interns</h2>
			${internHTML}
		</section>
	</div>
	
</body>
</html>
	
	`;
};

module.exports = template;