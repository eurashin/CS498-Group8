Type:
	computer science.	[property cs]
	business.	[property business]
	medical.	[property medical]

Header:
	logo.	[if medical]
	applicant.
	email.
	phone.
	linkedin.	[if cs || business]
	years_of_exp.	[if business]

Info:
	statement of purpose.	[if cs]
	summary of experience.	[is business || medical]

Projects:					
	number of projects.	[if cs]
	project info.	[if cs]

Extracurricular:
	number of activities.	[if business]
	activity info.	[if business]
