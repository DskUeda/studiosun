$(document).ready(function() {
	$(".dt").hover(function(){
		$(this).css("cursor","pointer"); 
	},function(){
		$(this).css("cursor","default"); 
		});
	$(".dd").css("display","none");
	$(".dt").click(function(){
		$(this).next().slideToggle("fast");
		});
});