$(function(){
   $("#ab_xfj").click(function(){
    $(this).attr("class","_bg");
    $("#cu_xfj").attr("class","");
    $("#ab_info").attr("style","display:block;");
    $("#cu_info").attr("style","display:none;");
   })
   $("#cu_xfj").click(function(){
    $(this).attr("class","_bg");
    $("#ab_xfj").attr("class","");
    $("#cu_info").attr("style","display:block;");
     $("#ab_info").attr("style","display:none;");
   })
 })