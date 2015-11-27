$(".galimg").each(function() {

	$(this).height($(this).width());
	
	var currentimg = $("img");

	var height = $(this).height();
	var width = $(this).width();

	if ( height > width ) {
		$(currentimg).addClass("portrait");
	}

	else if ( width > height ) {
		$(currentimg).addClass("landscape");
	}


});