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
      'includeNextPrevious'  : true,     // Display next and previous buttons
      'includePills'  : true,                   // Display pills navigation
      'initCallback' : function() {},            // Called if plugin initialized on an object
      'nextCallback' : function() {},           // Called after the next button is pressed
      'previousCallback' : function() {}     // Called after the previous button is pressed
    }, options);

    // Plugin code
    return this.each(function(index, value) {        

      var $dataObject = $(this);
      var $slideshowTarget = $(settings.slideshowTarget);
      var slideData = new Array();
      var nextPrevious = '';
      var pills = '';
      var currentSlide = 0;

      // Find and make sure there are child objects and a slideshow target before continuing
      var childTotal = $("> " + settings.childObject, this).length;
      var slideshowTargetTotal = $slideshowTarget.length;
      if( childTotal < 1 || slideshowTargetTotal < 1 ){
        console.log("Missing data object children or slideshow target");
        return;
      }

      // Hide data object
      $dataObject.hide();

      // Set initial data
      // $slideshowTarget.attr('data-current-slide', 0);      

      // Pull data from child objects
      $("> " + settings.childObject, this).each(function(index, value) {    
        var $child = $(this);
        slideData.push( $child.attr("src") );
      });

      // Create slideshow markup
      if( settings.includeNextPrevious ){
        nextPrevious = '<a href="#" class="previous">Previous</a>'
                              +'<a href="#" class="next">Next</a>';
      }

      if( settings.includePills ){
        pills = '<div class="pills">';
        for(var i = 0; i < slideData.length; i++){
          pills += '<a href="#" data-slide-target="'+ i + '" class="pill';
          if( i == 0){
            pills+= ' active';
          }
          pills += '"></a>';
        }
        pills += '</div>';
      }

      $slideshowTarget.prepend(
        '<div class="slide" style="background-image: url(' + slideData[0] + ' );"></div>'
        + '<div class="slide"></div>'
        + nextPrevious
        + pills
      );

      $('.pill', $slideshowTarget).on('click', function(event) {
        event.preventDefault();
        $this = $(this);
        var slideNum = $this.data('slide-target'); 
        var src = slideData[slideNum];
      });

      // Initialized
      settings.initCallback();

    });


  };
})( jQuery );