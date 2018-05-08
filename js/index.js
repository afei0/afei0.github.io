
//banner
var num = 0

function play(){
	
	$('.banner img').eq(num).siblings().fadeOut(0)
		$('.banner img').eq(num).fadeIn(0)

	$('.banner ul li').eq(num).siblings().removeClass('active')
	$('.banner ul li').eq(num).addClass('active')
	num++
	if (num>2) {
		num = 0
	}
}
setInterval(play,1000)

//搜索
$('.search input').blur(function(){
	var val = $('.search input').val()
	if(val === '南京'){
		$('.search a').attr('href','page/search.html')
	}
})


//加载更多
$('.more div').tap(function(){
	$(this).parent().next().css('display','block')
	$(this).parent().remove()
})

//商品跳转
$('.travel').tap(function(){
	window.location.href = '../page/driving_details.html'
})

