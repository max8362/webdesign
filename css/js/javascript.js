$(document).ready(function(){
  // $('body').css('background,'red') 잘 작동하는지 확인

  setInterval(function(){
    $('swiper-wrapper').animate({"marginLeft":-1200}, 400, function(){
      $(this).find('.swiper-slide').eq(0).appendTo($(this))
      $(this).css({"marginLeft":0})
      })
    }, 3000)
})