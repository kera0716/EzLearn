$(function(){

	$("#BTN").on("click", OPENOPEN );
	
	function OPENOPEN(){
		$("#NAV").show();
		$("#XX").on("click", CLOSECLOSE );
	}
	
	function CLOSECLOSE(){
		$("#NAV").hide();
		$("#XX").off("click");
	}
	
	$(window).on("resize",CLEARSTYLE);
	
	function CLEARSTYLE(){
		if($(window).innerWidth()>736){
			$("#NAV").removeAttr("style");
		}
	}
	
});

