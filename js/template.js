$(document).ready(function(){
	var containtPortfolio = $("#portfolio-block > div");
	console.log(containtPortfolio);
	$(".navigator").on('click', function(e){
		e.preventDefault();
		functions.filterMenu(containtPortfolio, $(this).attr('data-option'));
		return true;
	});
	/*$(".containt-section").on('mouseover',function(){
		$(this).children('div').eq(0).children('div').eq(0).removeClass('block-none').addClass('block-display');
    });
	$(".containt-section").mouseout(function(){
		$(this).children('div').eq(0).children('div').eq(0).addClass('block-none').removeClass('block-display');
    });*/
});