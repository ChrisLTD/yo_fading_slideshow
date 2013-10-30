# Yo Faux Pagination 
### Version .02 | By [Chris Johnson](http://chrisltd.com) | https://github.com/ChrisLTD/yo_faux_pagination
Yo Faux Pagination is a JQuery plugin that will let you page through a set of page elements by hiding and showing them in order. Just activate the plugin on a wrapper element and it will do the work.

![Animated Example](https://github.com/chrisltd/yo_faux_pagination/raw/master/example.gif)

Yo Faux Pagination will not activate if there is not more than one child object in the target wrapper.

## Usage Examples
Simple example
```html
<div class="faux_paginate">
  <div>
    Page 1
  </div>
  <div>
    Page 2
  </div>
</div>

<!-- Include JQuery Core above this line -->
<script src="jquery.yofauxpagination.js"></script>
<script>
	$(".faux_paginate").YoFauxPagination();
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
'childObject'	: 'div',            				// Target object
'buttonType' : 'button',                  // Next and Previous button tag
'prevText' : 'Previous',                  // Text for the previous button
'nextText' : 'Next',                      // Text for the next button
'initCallback' : function() {},           // Called if plugin initialized on an object
'nextCallback' : function() {},           // Called after the next button is pressed
'previousCallback' : function() {},     	// Called after the previous button is pressed
'lastCallback' : function() {}            // Called when the user reaches the last "page"
```