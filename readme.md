# Yo Fading Slideshow
### Version .01 | By [Chris Johnson](http://chrisltd.com) | https://github.com/ChrisLTD/yo_fading_slideshow
Yo Fading Slideshow is a slideshow that uses just two elements on the page and swaps css background-images. It includes next and previous buttons and pill/dot navigation.

![Animated Example](https://github.com/chrisltd/yo_fading_slideshow/raw/master/example.gif)

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
* Gracefully handle just one slide
* Switch it so height and width are on the slide css, and then try it with padding-top/bottom to see if you can make the slideshow responsive