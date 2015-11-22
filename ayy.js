/*
 * ayy.js 1.2.2
 * by inex
 */

var Ayy = (Ayy || {
	/*
		Ayy.lmao();
	*/
	lmao: function(){
		var ayylmao = '   .-""""-.\n  /        \\\n /_        _\\\n// \\      / \\\n|\\__\    /__/| AYY\n \\    ||    /  LMAO\n  \\        /\n   \\  __  /\n    \\ __ /\n     |  |\n     |  |';
		console.log(ayylmao);
		alert(ayylmao);
	},

	/*
		Ayy.id('myElement');
		// returns element by id
	*/
	id: function(id){ return document.getElementById(id); },

	/*
		Ayy.elem('.class form button');
		// returns first matched element
	*/
	elem: function(query){ return document.querySelector(query); },

	/*
		Ayy.elems('form input');
		// returns all matching elements
		
		// PROTIP:
		Ayy.each(Ayy.elems('div'), function(element){
			// your code
		});
	*/
	elems: function(query){ return document.querySelectorAll(query); },

	// :) http://stackoverflow.com/a/18078705
	ajaxObject: function(){
		if(typeof XMLHttpRequest !== 'undefined'){
			return new XMLHttpRequest();
		}
		var versions = [
			'MSXML2.XmlHttp.5.0',
			'MSXML2.XmlHttp.4.0',
			'MSXML2.XmlHttp.3.0',
			'MSXML2.XmlHttp.2.0',
			'Microsoft.XmlHttp'
		];

		var xhr;
		for(var i=0; i < versions.length; i++) {  
			try {
				xhr = new ActiveXObject(versions[i]);  
				break;
			} catch (e){}
		}
		return xhr;
	},
	ajaxSend: function(method, url, data, async, callback){
		var x = this.ajaxObject();
		if(method === 'GET' && data != ''){
			url = url + '?' + data;
			data = null;
		}
		x.open(method, url, async);
		x.onreadystatechange = function(){
			callback(x);
		};
		if(method === 'POST'){
			x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		}
		x.send(data);
	},

	/*
		Ayy.ajax(HTTP METHOD, PAGE URL, JS OBJECT WITH DATA, ASYNC AJAX CALL, FUNCTION CALLBACK);
	*/
	ajax: function(method, url, data, async, callback){
		var q = [];
		for(var key in data){
			q.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
		}
		method = method.toUpperCase();
		this.ajaxSend(method, url, q.join('&'), async, callback);
	},

	/*
		Ayy.get('/info', function(ajax){
			// your code
		});
		
		Ayy.get('/info', {param: value}, function(ajax){
			// your code
		});
	*/
	get: function(url, a, b){
		if(typeof a === 'function'){
			this.ajax('GET', url, null, true, a);
		} else {
			this.ajax('GET', url, a, true, b);
		}
	},

	/*
		Ayy.post('/save', {data: value}, function(ajax){
			// your code
		});
	*/
	post: function(url, data, callback){
		this.ajax('POST', url, data, true, callback);
	},

	/*
		Ayy.each({foo: 1, bar: 2}, function(key, value){
			// your code
		});
		
		Ayy.each(['value', 'foo', 'bar'], function(i, value){
			// your code
		});
	*/
	each: function(ao, callback){
		if(typeof ao === 'object'){
			for(var key in ao){
				if(ao.hasOwnProperty(key)){
					callback(key, ao[key]);
				}
			}
		} else {
			for(var i=0; i<ao.length; i++){
				callback(i, ao[i]);
			}
		}
	}
});
