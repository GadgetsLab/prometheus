var functions = {
    filterMenu: function(containtPortfolio, opc){
		var content = document.createElement('div');
		$("#portfolio-block").html('');
		if(opc == 0){
			$("#portfolio-block").html(containtPortfolio);
			return true;
		}
        containtPortfolio.each(function(){
			if ($(this).attr('data-type') == opc) {
					var transformet = document.createElement('div');
					transformet.classList.add('ed-item');
					transformet.classList.add('s-100');
					transformet.classList.add('l-25');
					transformet.classList.add('containt-section');	
					transformet.setAttribute('data-type', $(this).attr('data-type'));
					transformet.innerHTML = $(this).html();					
					$("#portfolio-block").append(transformet);
				}
		});
		return false;
    }
}