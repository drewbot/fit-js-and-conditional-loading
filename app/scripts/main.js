console.log('main');

$(window).resize(function(){
	if ($(window).width() <= 720){	
		$('.circle').hide()
	};
    if ($(window).width() >= 720){	
		$('.circle').show()
	}	
});