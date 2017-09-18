# ayy.js
Selector library in 233 bytes (minified + gzip)

![ayylmao](http://i.imgur.com/Y6eFiMI.gif)

### Browser support
Due to [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector#Browser_Compatibility) the min version is IE 8, Chrome 1 or Firefox 3.5.

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
