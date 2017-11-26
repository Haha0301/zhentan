$(function () {
  // 点击头部导航滚动
  $('#navTitle span').click(function () {
    $('#navTitle span').removeClass('active')
    $(this).addClass('active')
    var boxCon = $('#box div').eq($(this).index() + 4)
    var navCon = $('#navBox').height()
    var conTop = boxCon.offset().top - navCon
    $('body,html').animate({scrollTop: conTop},1000)
  })
  // 隐藏导航条
  $('#hideNav li').click(function () {
    $('#hideNav').hide()
    $('#hideNav li').removeClass('active')
    $(this).addClass('active')
    var boxCon = $('#box div').eq($(this).index() + 4)
    var navCon = $('.logoCon').height()
    var conTop = boxCon.offset().top - navCon
    $('body,html').animate({scrollTop: conTop},1000)
  })
  //导航按钮
  $('.hide_nav .hide_btn').click(function () {
    if ($('#hideNav').css('display') == 'block') {
      $('#hideNav').hide()
    } else {
      $('#hideNav').show()
    }
  })
  //  头部文字1s后淡入
  $('#textOl').animate({opacity: '1'}, 1000)
  // 应用场景图片切换
  // 点击标题
  $('#scenNav span').click(function () {
    $('#scenNav span').removeClass('active')
    $(this).addClass('active')
    $('#scenCon li p').removeClass('active')
    $('#scenCon li').eq($(this).index()).find('p').addClass('active')
  })
  // 点击图片
  $('#scenCon li').click(function () {
    $('#scenCon li p').removeClass('active')
    $(this).find('p').addClass('active')
    $('#scenNav span').removeClass('active')
    $('#scenNav span').eq($(this).index()).addClass('active')
  })
  // 自动轮播
  var iNow = 0;
  var next = function () {
      iNow++;
      if (iNow == $('#scenCon li').length + 1) {
        $('#scenNav span').removeClass('active')
        $('#scenNav span').eq(0).addClass('active')
        $('#scenCon li p').removeClass('active')
        $('#scenCon li').eq(0).find('p').addClass('active')
        iNow = 1
      }else{
        $('#scenNav span').removeClass('active')
        $('#scenNav span').eq(iNow-1).addClass('active')
        $('#scenCon li p').removeClass('active')
        $('#scenCon li').eq(iNow-1).find('p').addClass('active')
      }
    };
  var tid = setInterval(next,2000);
  next();
  $('#scenCon').mouseenter(function () {
    clearInterval(tid);
  })
  $('#scenCon').mouseleave(function () {
    tid = setInterval(next,2000);
    next();
  })
  $('#scenNav').mouseenter(function () {
    clearInterval(tid);
  })
  $('#scenNav').mouseleave(function () {
    tid = setInterval(next,2000);
    next();
  })
  // 判断移动端 
  function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
      // document.writeln("phone");
      $('#bigOl li').click(function () {
        $('#bigOl li').removeClass('active')
        $(this).addClass('active')
      })
    }
  }
 
  browserRedirect();
})