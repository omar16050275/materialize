(function ($){;
	$(function(){
		$('.sidenav').sidenav();
		$('.parallax').parallax();
		$('#textarea1').val('New Text');
	M.textarea1AutoResize($('#textarea1'));
	});
})(jQuery);