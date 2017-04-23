$(document).ready(function(){
	           $(".out-box1").children("ul").children("li").click(function(){
	           	$(".out-box1").children("ul").children("li").children("a").attr("class","");
	           	$(this).children("a").attr("class","bg-a");
	           })
            })