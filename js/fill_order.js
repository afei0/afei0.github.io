//返回功能
$('.top>i').tap(function(){
	history.back()
})



//房间数
	var val = Number($('.room input').val())
	$('.sub').tap(function(){
		val = Number($('.room input').val())
		if(val>=2){
		val--
		$('.room input').val(val)
		}
	})
	$('.add').tap(function(){
		val++
		$('.room input').val(val)
	})


//是否同意
$('.idea i').tap(function(){
	$(this).parent().addClass('select')
	$(this).parent().siblings().removeClass('select')
})

//姓名正则表达式
var reName =  /^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/
var reTel =   /^(((13|14|15|18|17)\d{9}))$/
var reEmail = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})$/



function fun1(){
	var tel = $('.tel').val()
	 if (!reTel.test(tel)) {
        $('.flip').addClass('active')
        $('.flip span').text('请输入正确的手机号')
         bool = false
    }else{
			bool = true
		}
}

function fun2(){
	var username = $('.username').val()
		if (!reName.test(username)) {
        $('.flip').addClass('active')
        $('.flip span').text('请输入正确的姓名')
        bool = false
		}else{
			bool = true
		}
}

function fun3(){
	var email = $('.email').val()
	 if (!reEmail.test(email)) {
        $('.flip').addClass('active')
        $('.flip span').text('请输入正确的邮箱')
         bool = false
    }else{
			bool = true
		}
}

function fun4(){
	var check = $('.info>span input').prop('checked')
	if(check){
		bool = true
	}else{
		bool = false
		 $('.flip').addClass('active')
        $('.flip span').text('请仔细阅读协议')
	}
}

var bool = true
$('.tel').blur(fun1)
$('.username').blur(fun2)
$('.email').blur(fun3)

//提交订单
$('footer a').tap(function() {
	fun1()
	if(bool === false){
		 $('.flip').addClass('active')
        $('.flip span').text('请输入正确的手机号')
	}else{
		fun2()
		if(bool === false){
		 $('.flip').addClass('active')
        $('.flip span').text('请输入正确的名字')
		}else{
			fun3()
			if (bool === false) {
				$('.flip').addClass('active')
        $('.flip span').text('请输入正确的邮箱')
			}else{
				fun4()
				if(bool === false){
					$('.flip').addClass('active')
        $('.flip span').text('请仔细阅读协议')
      }else{
      	location.href = '../page/pay.html'
      }
			}
		}
	}
	
})

$('.flip').tap(function() {
    $('.flip').removeClass('active')
})

$('.insure>ul>li>span:first-child>i').tap(function(){
	if ($(this).hasClass('active') === false) {
		$(this).addClass('active')
	}else{
		$(this).removeClass('active')
	}
})

$('.visitor>i').tap(function(){
	$('.visitor>ul>li:nth-child(3)').addClass('add')
})