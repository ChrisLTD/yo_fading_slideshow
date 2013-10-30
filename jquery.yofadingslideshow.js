// By Chris Johnson
// http://chrisltd.com
// Created October 2013
// Version .01
// Run this plugin on a div filled with images and it will create a fading slideshow inside a div with an id of 'slideshow'

(function( $ ){

  $.fn.YoFadingSlideshow = function( options ) {  

    // Create some defaults, extending them with any options that were provided
    var settings = $.extend( {
      'childObject'         : 'img',                // Target object
      'slideshowTarget'  : '#slideshow',     // Object to create the slideshow inside of
      'initCallback' : function() {},            // Called if plugin initialized on an object
      'nextCallback' : function() {},           // Called after the next button is pressed
      'previousCallback' : function() {}     // Called after the previous button is pressed
    }, options);

    // Plugin code
    return this.each(function(index, value) {        

      var $dataObject = $(this);
      var $slideshowTarget = $(settings.slideshowTarget);

      // Find and make sure there are child objects and a slideshow target before continuing
      var childTotal = $("> " + settings.childObject, this).length;
      var slideshowTargetTotal = $slideshowTarget.length;
      if( childTotal < 1 || slideshowTargetTotal < 1 ){
        console.log("Missing data object children or slideshow target");
        return;
      }

      // Hide data object
      $dataObject.hide();

      // Modify child objects
      $("> " + settings.childObject, this).each(function(index, value) {    
        var $child = $(this);
        // Number each slide
        $child.attr("data-index", index);
      });

      // Create slideshow markup
      $slideshowTarget.prepend('<h1>Slideshow</h1>');

      // Initialized
      settings.initCallback();

    });


  };
})( jQuery );