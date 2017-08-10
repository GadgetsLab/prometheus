$(document).ready(function(){
	functions.cargaInicial();
	$(".navigator").on('click', function(e){
			var con = 0;
			var top = 0;
			var col = 1;
			e.preventDefault();
			var opc = $(this).attr('data-option');
			if (opc == 0 ) {
				functions.cargaInicial();
			}else{
				$("#portfolio-block > div").each(function(){
					console.log(con);
					if (opc !== $(this).attr('data-type')) {
						$(this).fadeOut();
					} else {
						console.log(con);
						$(this).css("left", (con*25)+"%");		
						$(this).css("top", top+"px");
						$(this).fadeIn();
						if(con == 4){
							con = 0;
							top = 338*col;
							col++;
						}else{
							con++;
						}
					}
				});
				$("#portfolio-block").height((top));
			}
		});
	$( window ).scroll(function() {
  		var top = $(window).scrollTop();
		var h = parseInt($(".nav-bar-container").height()/2);
		var w = parseInt(($(".wwa-section").height()+$(".nav-bar-container").height())-200)
	
		if (h < top) {
			$(".fire").css('left', '0');
			$(".way").css('right', '0');
		}
		if (w < top) {
			$(".content-image-w").fadeIn();
		}
		
		if ((w+400) < top) {
			$(".content-image-w-2").fadeIn();
		}
	});	

	$(".anchor").on("click", function(e){
		e.preventDefault();
		console.log("Entrando al click");
		functions.goElement($(this).attr("href"));
	});
	/*$(".containt-section").on('mouseover',function(){
		$(this).children('div').eq(0).children('div').eq(0).removeClass('block-none').addClass('block-display');
    });
	$(".containt-section").mouseout(function(){
		$(this).children('div').eq(0).children('div').eq(0).addClass('block-none').removeClass('block-display');
    });*/
});