# Yo Fading Slideshow
### Version .03 | By [Chris Johnson](http://chrisltd.com) | https://github.com/ChrisLTD/yo_fading_slideshow
Yo Fading Slideshow is a jQuery plugin that uses just two elements on the page and swaps css background-images. It includes next and previous buttons and pill/dot navigation.

![Animated Example](https://github.com/chrisltd/yo_fading_slideshow/raw/master/example.gif)

## Usage Examples
Simple example
```html
<div id="slideshow"></div>

<div class="slide_data" style="display: none;">
  <div data-src="img/yourImage01.jpg">Caption 1</div>
  <div data-src="img/yourImage02.jpg">Caption 2</div>
</div>

<!-- Include JQuery Core above this line -->
<script src="jquery.yofadingslideshow.js"></script>
<script>
$(".slide_data").YoFadingSlideshow();
</script>
```

## Options
```js
'childObject'             : 'div',          // Target object
'slideshowTarget'         : '#slideshow',   // Object to create the slideshow inside of
'shouldAutoAdvance'       : true,           // Should the slideshow auto advance
'autoAdvanceDelay'        : 3000,           // How much time in milliseconds between slides
'startAutoAdvanceDelay'   : 3000,           // How much time in milliseconds before auto-advancing starts
'includeNextPrevious'     : true,           // Display next and previous buttons
'includePills'            : true,           // Display pills navigation
'includeCaptions'         : true,           // Display captions
'pauseOnHover'            : false,          // Pause auto advance on hover
'fadeSpeed'               : 200,            // Speed of fade in miliseconds
'captionAnimationSpeed'   : 200,            // Value for caption animations
'nextText'                : 'Next',         // Text inside of the next link
'previousText'            : 'Previous',     // Text inside of the previous link
'preloadNextImage'        : true,           // Preload possible next image into hidden div
'initCallback'            : function() {},  // Called if plugin initialized on an object
'beforeSlid'              : function() {},  // Called before the image has changed
'afterSlid'               : function() {}   // Called after the image has changed
```
