
$('.top>a').tap(function(){
    history.back()
})


//加法

function total(){
    var result = 0
    result = num * 5820
    $('.may').text(result)
}

var num = Number($('#min3').val())
$('.get').text(num)


$('.min2').tap(function(){
    num++
    $('#min3').val(num)
    total()
    $('.get').text(num)
})
$('.min1').tap(function(){
    if(num>0){
        num--
        $('#min3').val(num)
    }
     total()
    $('.get').text(num)
})


function total1(){
    var result = 0
    result = num1 * 5820
    $('.may4').text(result)
}

var num1 = Number($('#min3').val())



$('.min24').tap(function(){
    num1++
    $('#min34').val(num1)
    total1()
})
$('.min14').tap(function(){
    if(num1>0){
        num1--
        $('#min34').val(num1)
    }
     total1()
})
