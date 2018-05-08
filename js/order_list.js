$('.top>i').tap(function(){
	history.back()
})

//分类
$('section>ul li').tap(function(){
	var ind = $(this).index()
	$('.roof').css('display','block')
	if ($('.roof ul').eq(ind).hasClass('active')===false) {
		$('.roof ul').eq(ind).addClass('active')
	}else{
		$('.roof ul').eq(ind).removeClass('active')
	}
	$('.roof ul').eq(ind).siblings().removeClass('active')
	if($('.roof ul').hasClass('active')===false){
		$('.roof').css('display','none')
	}
})

$('.single_list').tap(function(){
	location.href = '../page/order_details.html'
})

$('.roof>div').tap(function(){
	$('.roof').css('display','none')
})