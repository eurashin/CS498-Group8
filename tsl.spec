parameters:
	Type:
		Computer Science	[property cs]
		business	[property business]
		medical	[property medical]

	Header:
		logo	[if medical]
		name
		email
		phone
		linkedin	[if cs || business]
		years_of_exp	[if business]

	Info:
		Statement of Purpose	[if cs]
		Summary of Experience	[is business || medical]

	Projects:					
		number_of_projects	[if cs]
		project_info	[if cs]

	Extracurricular:
		number_of_activities	[if business]
		activity_info	[if business]