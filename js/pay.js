$('.top>i').tap(function(){
    history.back()
})

$(".sel").tap(function() {
		if($(this).hasClass('active')){
    	$(this).removeClass('active')
		}else{
			$(this).addClass("active")
		}
    $(this).parent().siblings().children("i").removeClass("active")
    if($('.sel').hasClass('active')){
		$('footer a').attr('href','pay_succeed.html')
		}else{
		$('footer a').attr('href','javascript:void(0)')
	}
})

//倒计时
var t = 1200

function time() {
    var showMinute = Math.floor(t / 60)
    var showSecond = Math.floor((t - 60 * showMinute))
    if (showMinute < 10) {
        showMinute = '0' + showMinute
    }
    if (showSecond < 10) {
        showSecond = '0' + showSecond
    }
    if (t <= 0) {
        clearInterval(loop)
        $('.hour').text('00')
        $('.min').text('00')
        $('.sec').text('00')
    } else {
        $('.hour').text('00')
        $('.min').text(showMinute)
        $('.sec').text(showSecond)
    }
    t--
}
time()
var loop = setInterval(time, 1000)

