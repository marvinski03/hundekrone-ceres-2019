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


	/** add brand links **/

	var saveword = $(".producertag.h6.producer.text-muted").text();
	if(saveword!="Hundekrone"){
		var urlcase = saveword.toLowerCase().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').replace('--','-');

		if(urlcase.charAt(urlcase.length - 1) == "-"){
			urlcase = urlcase.slice(0,-1);
		}

		if(urlcase=="feebee"){
			urlcase="feebee-dogwear";
		}

		if(urlcase=="bozita"){
			urlcase="bozita-hundefutter";
		}

		var buildurl = "https://www.hundekrone.de/marken/"+urlcase;
		$(".producertag.h6.producer.text-muted").html("<a href='"+buildurl+"' title='"+saveword+"'>"+saveword+"</a>");
	}

});