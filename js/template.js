$(document).ready(function(){
	var containtPortfolio = $("#portfolio-block > div");
	$(".navigator").on('click', function(e){
		e.preventDefault();
		functions.filterMenu(containtPortfolio, $(this).attr('data-option'));
		return true;
	});
});