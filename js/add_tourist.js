$('.top>i').tap(function(){
	history.back()
})

$('.card_1').focus(function() {
    $('.min ul li ul').addClass('card')
    if ($('.min ul li ul').hasClass('card')) {
        $('.min ul li ul li').tap(function() {
            var text = $(this).text()
            $('.card_1').val(text)
            // console.log($(this))
        })
    }

})
$('.card_1').blur(function() {
    $('.min ul li ul').removeClass('card')
})

var reName = /^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/
var reTel = /^(((13|14|15|18|17)\d{9}))$/

$('.username').blur(function() {
    var username = $('.username').val()
    if (!reName.test(username)) {
        $('.flip').addClass('active')
        $('.flip span').text('请输入正确的姓名')
    }
})
$('.tel').blur(function() {
    var tel = $('.tel').val()
    if (!reTel.test(tel)) {
        $('.flip').addClass('active')
        $('.flip span').text('请输入正确的手机号')
    }
})

$('.top a').tap(function() {
    var username = $('.username').val()
    var tel = $('.tel').val()
    var card = $('.card_1').val()
    if (!reName.test(username)) {
        $('.flip').addClass('active')
        $('.flip span').text('请输入正确的姓名')
    } else {
        if (!reTel.test(tel)) {
            $('.flip').addClass('active')
            $('.flip span').text('请输入正确的手机号')
        }else{
        	if(card === '身份证' || card === '驾驶证'){
        			location.href = '../page/select_tourist.html'
        	}else{
        		 $('.flip').addClass('active')
        		$('.flip span').text('请选择有效的证件类型')
        	}
        }
    }
})

$('.flip').tap(function() {
    $('.flip').removeClass('active')
})