(function($){
  /**
  * A simple jQuery function to show and hide div.
  * @param {options} it could take different form.
  *   if not set it defaults to popup 'open' method.
  *   $('.className').popup('hide') invokes hide method.
  *   update document when new methods are added
  * Usage: $('.className').popup()
  **/
  $.fn.popup = function(options) {
    var plugin = function(){
      var self = $(this), settings = null;
      // wire up one time stuff in init.
      var init = function(){
        //look for 'ui-close' class and attach hide event on click
        self.find(".ui-close").click(function(){self.popup('hide');});
        if(settings.backdropClose){
          self.click(function(e){
            self.popup('hide');
          });
        }
      }
      var default_options = {init : true, backdropClose : true};
      if(!this.settings) {
        this.settings = $.extend(default_options, options);
        settings = this.settings;
        init();
      }
      if(typeof options === "string"){
        options = {action : options};
      } else {
        options = {action : 'open'};
      }
      settings = (this.settings = $.extend(this.settings, options));
      if(settings){
        switch(settings.action){
          case 'hide':
            self.hide();
            $('body').removeClass('modal-open');
            break;
          default:
            $('body').addClass('modal-open');
            self.show();
        }
      }
      return self;
    }
    return this.each(plugin);
  };
}(jQuery));