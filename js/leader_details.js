$('.top>i').tap(function(){
	history.back()
})

$('.more').tap(function(){
	$('.more_1').css('display','block')
	$(this).remove()
})