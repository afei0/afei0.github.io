
var num=0
$(".tab").tap(function(){
	
if ($(this).hasClass("option")) {
	num--
	$(this).removeClass("option")
}else{
	if (num<2) {
	num++
	$(this).addClass("option")
}
	// $(this).parent().siblings().find(".tab").removeClass("option")
}
$(".tab1").text(num)
})
$(".top-l").tap(function(){
	history.back()
})