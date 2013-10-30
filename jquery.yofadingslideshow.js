// By Chris Johnson
// http://chrisltd.com
// Created October 2013
// Version .01
// Run this plugin on a div properly set with src data and captions and it will create a fading slideshow inside a div with an id of 'slideshow'

(function( $ ){

  $.fn.YoFadingSlideshow = function( options ) {  

    // Create some defaults, extending them with any options that were provided
    var settings = $.extend( {
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
    }, options);

    // Plugin code
    return this.each(function(index, value) {        

      var $dataObject = $(this);
      var $slideshowTarget = $(settings.slideshowTarget);
      var slideData = new Array();
      var nextPrevious = '';
      var pills = '';
      var caption = '';
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

      // Pull data from child objects
      $("> " + settings.childObject, this).each(function(index, value) {    
        var $child = $(this);
        var imgData = new Array();
        imgData['src'] = $child.data("src");  
        imgData['caption'] = $child.html();  
        slideData.push( imgData );
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

      if( settings.includePills ){
        caption = '<div class="caption">'
                    + '<div class="caption_inner">'
                    + slideData[0]['caption']
                    + '</div>'
                    + '</div>';
      }

      $slideshowTarget.prepend(
        '<div class="slide"></div>'
        + '<div class="slide" style="background-image: url(' + slideData[0]['src'] + ' );"></div>'
        + nextPrevious
        + pills
        + caption
      );

      // Bind actions to buttons
      $('.pill', $slideshowTarget).on('click', function(event) {
        event.preventDefault();
        $this = $(this);
        var slideNum = $this.data('slide-target'); 
        goToSlide( slideNum );
      });

      $('.next', $slideshowTarget).on('click', function(event) {
        event.preventDefault();
        nextSlide();
      });

      $('.previous', $slideshowTarget).on('click', function(event) {
        event.preventDefault();
        previousSlide();
      });

      // Auto advance
      function autoAdvance(){
        nextSlide();
      }

      function startAutoAdvance(){
        if( settings.shouldAutoAdvance ){
          autoAdvanceTimer = setInterval( autoAdvance, settings.autoAdvanceDelay ); 
        }  
      }

      function stopAutoAdvance(){
        clearInterval( autoAdvanceTimer );
      }

      startAutoAdvance();

      // Functions
      function goToSlide( i ){
        settings.beforeSlid();
        stopAutoAdvance();
        var $nextSlide = $('.slide', $slideshowTarget).first();
        var $activeSlide = $('.slide', $slideshowTarget).last();
        currentSlide = i;
        $nextSlide.css('backgroundImage', 'url(' + slideData[ i ]['src'] + ')');
        $activeSlide.fadeOut( settings.fadeSpeed, function(){
          $activeSlide.prependTo( settings.slideshowTarget );
          $activeSlide.show();
        });
        updateActivePill();
        updateCaption();
        startAutoAdvance();
        settings.afterSlid();
      }

      function nextSlide(){
        var nextSlide = currentSlide + 1;
        if( nextSlide >= slideData.length ){
          nextSlide = 0;
        }
        goToSlide( nextSlide );
      }

      function previousSlide(){
        var previousSlide = currentSlide - 1;
        if( currentSlide == 0 ){
          previousSlide = slideData.length - 1;
        }
        goToSlide( previousSlide );
      }

      function updateActivePill(){  
        $('.pill', $slideshowTarget).removeClass('active');
        $('.pill:nth-child(' + (currentSlide + 1) + ')', $slideshowTarget).addClass('active');
      }

      function updateCaption(){
        var $captionTarget = $('.caption_inner', $slideshowTarget);
        var currentHeight = $captionTarget.outerHeight(true);
        $captionTarget.css({'min-height': currentHeight + "px", 'max-height': currentHeight + "px"}); 
        $captionTarget.animate(
          { opacity: 0.0 }, 
          settings.captionAnimationSpeed, 
          function() {
          $captionTarget.html( slideData[ currentSlide ]['caption'] );
          } 
        ).animate(
          {"min-height": 0, "max-height" : "1000px" }, 
          settings.captionAnimationSpeed 
        ).animate(
          { opacity: 1 }, 
          settings.captionAnimationSpeed 
        );
      }

      // Initialized
      settings.initCallback();

    });

  };
})( jQuery );