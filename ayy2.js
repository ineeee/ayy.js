/*
 * ayy.js 2.3.0
 * by inexistence
 */

function Ayy(query, option) {
	var parent = document;

	if(this && window && 'HTMLElement' in window && this instanceof HTMLElement) {
		parent = this;
	}

	if(typeof option === 'undefined') {
		option = 'query';
	}

	switch(option) {
		default:
		case 'el':
		case 'qs':
		case 'query':
		case 'selector':
			/* Browser support:
			 * - IE8+
			 * - Firefox 3.5+
			 * - Chrome 4+
			 */
			return parent.querySelector(query);
			break;

		case 'els':
		case 'all':
		case 'qsa':
		case 'queryall':
		case 'selectorall':
			/* Browser support:
			 * - IE8+
			 * - Firefox 3.5+
			 * - Chrome 4+
			 */
			return parent.querySelectorAll(query);
			break;

		case 'id':
			/* Browser support:
			 * - IE6+
			 * - Firefox 2+
			 * - Chrome 1+
			 */
			return parent.getElementById(query);
			break;

		case 'class':
			/* Browser support:
			 * - IE9+
			 * - Firefox 3+
			 * - Chrome 4+
			 */
			return parent.getElementsByClassName(query);
			break;

		case 'tag':
			/* Browser support:
			 * - IE6+
			 * - Firefox 2+
			 * - Chrome 1+
			 */
			return parent.getElementsByTagName(query);
			break;

		case 'name':
			/* Browser support:
			 * - IE6+
			 * - Firefox 2+
			 * - Chrome 4+
			 */
			return parent.getElementsByName(query);
			break;
	}
}
