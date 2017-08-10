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
					if (opc !== $(this).attr('data-type')) {
						$(this).fadeOut();
					} else {
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
		functions.goElement($(this).attr("href"));
	});

	$(".portfolio-section__tags a.navigator").on("click", function(){	
		$(".portfolio-section__tags a.navigator").each(function(){
			$(this).removeClass("active");
		});
		$(this).addClass("active");
	});
	$(".containt-section").on("click", function(){
		functions.getElementPortfolio($(this).attr("data-name"));
		$(".modal").fadeIn();
		$(".veil").fadeIn("slow");
	});
		$(".veil").on("click", function(){
		$(".modal").fadeOut("slow");
		$(".veil").fadeOut();
	});

	$("#form-contact").on('submit', function(e){
		e.preventDefault();
		functions.sendMail($(this).serialize());
	});

});