$(document).ready(function(){

	var savewidth = 0;

	function switchSearch(){

		if( $(window).width() !== savewidth ){


			if( $(window).width() < 992 ){
				$("#searchBox").insertBefore("#mainNavbarCollapsable");
			}else{
				$("#searchBox").insertBefore("#mainNavbarCollapsable .breadcrumb");
			}

			savewidth = $(window).width();
		}
	}

	switchSearch();

	$(window).resize(function(){
		switchSearch();
	});

});