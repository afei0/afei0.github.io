$('.top>p').tap(function(){
  history.back()
})

$(".pic3").tap(function(){
 	var ele=$(this).find("span")
 	if (ele.hasClass("foot1")) {
	$(this).find("span").removeClass("foot1")
	$(this).find("p").css("color","#000")
}else{
	$(this).find("p").css("color","#51bbdb")
    $(this).find("span").addClass("foot1")
}
})
  $(".pic4").tap(function(){
 	var ele=$(this).find("span")
  	if (ele.hasClass("foot2")) {
    $(this).find("span").removeClass("foot2")
    $(this).find("p").css("color","#000")
    
}else{
    $(this).find("span").addClass("foot2")
   $(this).find("p").css("color","#51bbdb")
}
})
  $(".content-top ul li").tap(function(){
  	var obg=$(this).index()

  	$(this).parent().siblings().css("margin-left",obg*213/100+"rem")
  })
  $(".con1").tap(function(){
  
  	var obj=$(".feat1").offset().top
  	$(window).scrollTop(obj)
  })
    $(".con2").tap(function(){
  	var obj=$(".feat2").offset().top
  	$(window).scrollTop(obj)
  })
       $(".con3").tap(function(){
  	var obj=$(".feat3").offset().top
  	$(window).scrollTop(obj)
  })


$('.referral>div').eq(0).tap(function(){
  location.href = '../page/leader_details.html'
})