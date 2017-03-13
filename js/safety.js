
$("#edit").on("click",function(){
    $("span").show();
})
$("#add").on("click",function(){
    var temp=$("<li>微博加V<span>x</span></li>");
    if($(this).parent().parent().find("ul li").size()>7){
        alert("不能再添加啦！");
    }else{
        $(this).parent().parent().find("ul").append(temp);
    }
})
$(".right ul").on("click","li span",function(){
    $(this).parent().remove();
})
$(".nav_info li").on("click",function(){
    var ind=$(this).index();
    $(".nav_info li").eq(ind).addClass("bg").siblings().removeClass("bg");
})
$("#exit").on("click",function(){
    alert("退出成功");
})