function Ayy(query, option){
	if(typeof option === 'undefined'){
		option = 'query';
	}
	
	/*
		All of these functions work on any version of
		- Google Chrome (higher than 4.0)
		- Firefox (higher than 3.0)
		- Safari (higher than 3.1)
	*/
	
	switch(option){
		case 'query':
			// IE8 Opera10.1 Android2.1
			return document.querySelector(query);
			break;

		case 'queryall':
			// IE8 Opera10.1 Android2.1
			return document.querySelectorAll(query);
			break;

		case 'id':
			// IE5
			return document.getElementById(query);
			break;

		case 'class':
			// IE9 Opera9.5 Android2.1
			return document.getElementsByClassName(query);
			break;

		case 'tag':
			// IE6 Opera9.5
			return document.getElementsByTagName(query);
			break;

		case 'name':
			return document.getElementsByName(query);
			break;

		default:
			// IE8 Opera10.1 Android2.1
			return document.querySelector(query);
			break;
	}
}

// TODO: code ajax