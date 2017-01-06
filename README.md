# ayy.js
Selector library in ~600 bytes

![ayylmao](http://i.imgur.com/Y6eFiMI.gif)

### Browser support
Version 1.x works on anything, even IE5 for some reason. Version 2 works on IE9 (and up), or any modern browser. See `ayy2.js` for details, or [caniuse](http://caniuse.com/#search=querySelector).

### Get it
Download `ayy2.min.js` or use a cdn:
```
https://cdn.rawgit.com/inexist3nce/ayy.js/master/ayy2.min.js
```

### Example
Given the following document:
```
<div id="main">
	<div class="article">
		<h3>Article #1</h3>
		<p>blahblahblah</p>
		<p>blahblahblah</p>
	</div>
	<div class="article">
		<h3>Article #2</h3>
		<p>something something irrelevant content</p>
	</div>
</div>
```

Select main container:
```
Ayy('#main')
```

All articles:
```
Ayy('.article', 'all')
```

It's basically [`document.querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector), so feel free to use any CSS selector.

### protip
Feeling adventurous? ~~Clutter~~ Extend the prototype of every html element and unlock amazing features™!
```
HTMLElement.prototype.Ayy = Ayy;

Ayy('#main').Ayy('.article').Ayy('p', 'tag')
```
