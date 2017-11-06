(function($) {
  $.fn.changeWords = function(options) {
    var settings = $.extend({
      time        : 1500,
      animateIn   : "zoomIn",
      animateOut  : "zoomOut",
      selector    : "span"
    }, options);

    /**
     * Passed element
     * @type {jQuery}
       */
    var el = this;

    var ChangeWords = function() {
      var $this = this;

      this.wordCount  = $(settings.selector, el).size();
      this.words      = $(settings.selector, el);
      this.firstWord  = $(this.words[0]);

      /**
       * Animate In
       * @param el
         */
      this.in = function(el) {
        el.addClass("animated " + settings.animateIn).css("display", "inline-block");
      };

      /**
       * Animate Out
       * Wait 500 ms before
       * interval set to end
       * to allow for animation to complete
       * @param el
         */
      this.out = function(el) {
        setTimeout(function() {
          el.addClass("animated " + settings.animateOut).css("display", "inline-block");
        },(settings.time - 500));
      };

      /**
       * Clear elements that aren't meant to be there
       * @param el
       */
      this.clear = function(el) {
        el.css("display", "none").removeClass();
      };

      /**
       * Constructor class
       * @private
         */
      this.__construct = function() {

        // Set up
        $this.words.filter(function() {
          return $(this).attr("data-id") != "1"
        }).css("display", "none");

        // First element trigger
        $this.out($this.firstWord);

        // Loop over the rest
        var count = 1;
        setInterval(function() {
          ++count;
          var wordOrder = count,
              wordSelected,
              wordDisabled;

          // Move in and out
          wordSelected = $this.words.filter(function() {
            return $(this).attr("data-id") == wordOrder
          });
          $this.in(wordSelected);
          $this.out(wordSelected);

          // Hide others
          wordDisabled = $this.words.filter(function() {
            return $(this).attr("data-id") != wordOrder
          });
          $this.clear(wordDisabled);

          if (count == $this.wordCount) {
            count = 0;
          }

        }, settings.time);
      };

      // Initiate plugin
      this.__construct();
    };

    new ChangeWords();
  }
}(jQuery));
