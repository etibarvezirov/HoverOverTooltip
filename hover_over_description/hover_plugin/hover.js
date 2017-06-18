(function($){
	
	$.fn.hover = function(){
		
		$(this).mousemove(function(e){

           var text = $(this).attr('hover_text');

           $('#txt').text(text).show();

           $('#txt').css({ 'top': e.clientY + 7 ,'left': e.clientX + 7 });

        }).mouseout(function(){

              $('#txt').hide();

        });
		
	}
	
	
})(jQuery);