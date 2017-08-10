var functions = {
    cargaInicial: function ()
	{
		var con = 0;
		var col = 1;
		$("#portfolio-block > div").each(function(index){
		if (index < 4) {
			$(this).css("left", (con*25)+"%");
		}
		if(con == 4){
			col++;
			$("#portfolio-block").height((319*col));
			con =0;
		}else{
			con++;
		}
		if (index > 3) {
			$(this).css("left", (con*25)+"%");		
			$(this).css("top", "338px");		
		}
		$(this).fadeIn();
		});
	},
	goElement: function(id){
        $('html,body').animate({
            scrollTop: $(id).offset().top
        }, 500);
	}

}