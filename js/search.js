$('.top>i').tap(function(){
	// alert(1)
	window.history.back()
})

$('footer>ul>li').tap(function(){

	var ind =  $(this).index()
	$('.roof .roof_city .tag>li').eq(ind).addClass('active_1')
	$('.roof .roof_city .tag>li').eq(ind).siblings().removeClass('active_1')
	$('.roof').css('display','block')
})

$('.roof>div:first-child').tap(function(){
	$(this).parent().css('display','none')
})


$('.list li em').tap(function(){
	$(this).addClass('active')
	$(this).siblings().css('color','#50bbdb')
	$(this).parent().siblings().children('em').removeClass('active')
	$(this).parent().siblings().children('span').css('color','#000')
})

