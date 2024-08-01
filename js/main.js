$(function () { //삭제x
  //depth2영역
  $(".depth2, .depth2_bg").hide()
  $("#gnb > li").mouseenter(function () {
    $(".depth2").stop().slideDown();
    $(".depth2_bg").stop().slideDown(200);
    // $("#header .inner").css("border-bottom", "2px solid var(--main_color)");
  });
  $("#gnb > li").mouseleave(function () {
    $(".depth2").stop().slideUp();
    $(".depth2_bg").stop().slideUp();
    // $("#header .inner").css("border-bottom", "");
  });

  //depth2 모바일 영역
  $(".depth2_m").hide()
  $(".mgnb > ul > li").click(function () {
    $(this).find(".depth2_m").slideDown();
    $(this).siblings().find(".depth2_m").slideUp();
  });
  $(".mgnb > ul > li > a").click(function () {
    $(this).css("color", "#164194");
    $(this).css("font-weight", "500");
    $(this).parent().siblings().find("a").css("color", "#000");
    $(this).parent().siblings().find("a").css("font-weight", "400");
  });


  $(".mgnb_wrap, .dim, .depth2_m").hide()

  $(".btn_ham").click(function () {
    $(".mgnb_wrap, .dim").fadeIn();
    $(".mgnb").animate({
      "right": "0"
    });
  });
  $(".mgnb_close").click(function () {
    $(".mgnb_wrap, .dim").fadeOut();
    $(".mgnb").animate({
      "right": "-100%"
    });
  });



  //lang영역 
  $(".lang_txt").hide()
  $(".lang").mouseenter(function () {
    $(".lang_txt").stop().slideDown();
  });
  $(".lang").mouseleave(function () {
    $(".lang_txt").stop().slideUp();
  });


  // 매인배너영역
  const banner = new Swiper(".banner", {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    speed: 1500,
    navigation: {
      nextEl: "#main_banner .swiper-button-next",
      prevEl: "#main_banner .swiper-button-prev",
    }
  });

  // 비지니스영역
  $(".business_menu li").mouseenter(function () {
    $(this).stop().addClass("active");
  });
  $(".business_menu li").mouseleave(function () {
    $(this).stop().removeClass("active");
  });


  // scroll

  $(window).scroll(function () {
    let scrollT = $(this).scrollTop();
    if (scrollT > 300) {
      $("#header").addClass("fix");
    } else {
      $("#header").removeClass("fix");
    }
  });

}); //삭제x