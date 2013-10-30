# Yo Faux Pagination 
### Version .02 | By [Chris Johnson](http://chrisltd.com) | https://github.com/ChrisLTD/yo_faux_pagination
Yo Faux Pagination is a JQuery plugin that will let you page through a set of page elements by hiding and showing them in order. Just activate the plugin on a wrapper element and it will do the work.

![Animated Example](https://github.com/chrisltd/yo_faux_pagination/raw/master/example.gif)

Yo Faux Pagination will not activate if there is not more than one child object in the target wrapper.

## Usage Examples
Simple example
```html
<div id="slideshow"></div>

<div class="slide_data" style="display: none;">
  <div data-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNovzb5PwAGyALwB20G2QAAAABJRU5ErkJggg==">Caption 1</div>
  <div data-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWPo6ur6DwAF3gKeHZlJ8QAAAABJRU5ErkJggg==">Caption 2</div>
</div>

<!-- Include JQuery Core above this line -->
<script src="jquery.yofadingslideshow.js"></script>
<script>
$(".slide_data").YoFadingSlideshow();
</script>
```

Advanced example with callbacks
```html
<form class="paginate_form">
  <div class="paginate_page">
    <label>Input 1</label>
    <input>
  </div>
  <div class="paginate_page">
    <label>Input 2</label>
    <input>
  </div>
  <input type="submit" value="Submit">
</form>

<!-- Include JQuery Core above this line -->
<script src="jquery.yofauxpagination.js"></script>
<script>
	$(".paginate_form").YoFauxPagination({
		'childObject'         : '.paginate_page',
		'initCallback' : function(){ $('.paginate_form > [type="submit"]').hide(); }, // Hide submit form
		'lastCallback' : function(){ $('.paginate_form > [type="submit"]').show(); } 
	});
</script>
```

## Options
```js
'childObject'         : 'div',        // Target object
'slideshowTarget'  : '#slideshow',    // Object to create the slideshow inside of
'shouldAutoAdvance': true,						// Should the slideshow auto advance
'autoAdvanceDelay' : 3000,      			// How much time in milliseconds between slides
'includeNextPrevious'  : true,     		// Display next and previous buttons
'includePills'  : true,               // Display pills navigation
'includeCaptions' : true,             // Display captions
'fadeSpeed'     : 'fast',             // Value to pass to jQuery fade function
'captionAnimationSpeed' : 200,   			// Value for caption animations
'initCallback' : function() {},       // Called if plugin initialized on an object
'beforeSlid' : function() {},         // Called before the image has changed
'afterSlid' : function() {}           // Called after the image has changed
```

## Todo
* Pause on hover
* Disable nav buttons while moving between slides
* Add options to disable fading animations so you could use CSS transitions
* Add loading.gif to background of slideshow