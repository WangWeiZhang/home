$(function(){
	$("#pr_phone").hover(
		function(){$("#pr_code").attr("style","display:block;")},
		function(){$("#pr_code").attr("style","display:none;");})
	$("#pr_code").hover(
		function(){$(this).attr("style","display:block;")},
		function(){$(this).attr("style","display:none;")})
	$("#three_left_nav").children("h3").each(function(){
		$(this).click(function(){
			$(this).children("a").attr("class","a_bgc").end().siblings("h3").children("a").attr("class","");
		})
	})
})
	// ************************文字滚动****************************
function scroll(){
  var three_right_three=document.getElementById('three_right_three');
  var right_three_content=document.getElementById("right_three_content");
    three_right_three.scrollTop+=10;
    if(three_right_three.scrollTop>=20){
       right_three_content.appendChild(right_three_content.children[0]);
       three_right_three.scrollTop=0;
    }
  }
 j=setInterval("scroll()",400);
 
 // var sleep=document.getElementById("sleep");
 // sleep.onmouseover=function(){
 // 	clearInterval(j);
 // }
 // sleep.onmouseout=function(){
 // 	j=setInterval("scroll()",400);
 // }