//导航
$(document).ready(function(){
	           $(".out-box").children("ul").children("li").click(function(){
	           	$(".out-box").children("ul").children("li").children("a").attr("class","");
	           	$(this).children("a").attr("class","starta");
	           })
            })