/*
 * ayy.js 2.1.0
 * by inex
 */

function Ayy(query, option) {
	if(typeof option === 'undefined') {
		option = 'query';
	}

	/*
		Works in:
		- Google Chrome (higher than 4.0)
		- Firefox (higher than 3.0)
		- Safari (higher than 3.1)
	*/

	switch(option) {
		default:
		case 'elem':
		case 'query':
			// IE8 Opera10.1 Android2.1
			return document.querySelector(query);
			break;

		case 'elems':
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
	}
}

Ayy.ajax = function(method, url, callback, options) {
	// Set some default options
	var defaults = {
		data: {}, // data to send with the request
		async: true, // async ajax request
		onReadyOnly: true // only run callback when request is finished?
	};

	if(typeof options == 'undefined') {
		// Set the defaults
		options = defaults;
	} else {
		// Merge the given `options` with `defaults`
		var newoptions = {},
			opt;
		for(opt in defaults) { newoptions[opt] = defaults[opt]; }
		for(opt in options) { newoptions[opt] = options[opt]; }
		options = newoptions;
	}

	// Do we have to parse the data?
	if(typeof options.data === 'object') {
		if(options.data.length === 0) {
			// Skip if its empty
			options.data = '';
		} else {
			// If its not empty, make the object an encoded string
			var encData = [];
			for(var key in options.data) {
				encData.push(encodeURIComponent(key) + '=' + encodeURIComponent(options.data[key]));
			}
			options.data = encData.join('&');
		}
	}
	
	method = method.toLowerCase();
	this.ajaxSend(method, url, options.data, options.async, callback, options.onReadyOnly);

}

Ayy.ajaxSend = function(method, url, data, async, callback, onReadyOnly) {
	var x = null;
	if(typeof XMLHttpRequest !== 'undefined') {
		x = new XMLHttpRequest();
	} else {
		var versions = [
			'MSXML2.XmlHttp.6.0',
			'MSXML2.XmlHttp.5.0',
			'MSXML2.XmlHttp.4.0',
			'MSXML2.XmlHttp.3.0',
			'MSXML2.XmlHttp.2.0',
			'Microsoft.XmlHttp'
		];

		var xhr;
		try {
			for(var i=0; i<versions.length; i++) {
				xhr = new ActiveXObject(versions[i]);
				break;
			}
		} catch(e) {}
		x = xhr;
	}

	if(method === 'get' && data !== '') {
		url = url + '?' + data;
		data = null;
	}

	if(onReadyOnly === true) {
		x.onreadystatechange = function() {
			if(x.readyState === 4) callback(x);
		};
	} else {
		x.onreadystatechange = function() {
			callback(x);
		};
	}

	x.open(method, url, async);

	if(method === 'post') {
		x.setRequestHeader('Content-Type', 'application-x-www-form-urlencoded');
	}
	x.send(data);
}

// Set some aliases for certain browsers
Ayy.prototype.ajaxSend = Ayy.ajaxSend;
Ayy.prototype.ajax = Ayy.ajax;