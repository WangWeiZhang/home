$(document).ready(function(){
				$(".two-main").children("div").hover(function(){
					$(this).children("p").animate({"top":"266px"},150);
//					$(this).children("img").animate({"width":"300px"},100);
				},function(){
					$(this).children("p").animate({"top":"311px"},150);
				})
			})