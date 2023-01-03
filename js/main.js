//More btn
$(document).ready(function () {
  $(".more").click(function () {
    if ($(".hide").is(":visible")) {
      $(".hide").slideUp();
    } else {
      $(".hide").slideDown();
    }
  });
});

//메뉴버튼 애니메이션
$(".menu").click(function () {
  $(this).toggleClass("active");
});

//메뉴버튼 누르면 전체메뉴 Fade
$(".menu").click(function () {
  if ($(".all_menu").is(":visible")) {
    $(".all_menu").fadeOut();
  } else {
    $(".all_menu").fadeIn();
  }
});

// html dom 이 다 로딩된 후 실행된다.
$(document).ready(function () {
  // menu 클래스 바로 하위에 있는 a 태그를 클릭했을때
  $(".depth3_btn > span").click(function () {
    var submenu = $(this).next("ul");

    // submenu 가 화면상에 보일때는 위로 부드럽게 접고 아니면 아래로 부드럽게 펼치기
    if (submenu.is(":visible")) {
      submenu.slideUp();
    } else {
      submenu.slideDown();
    }
  });
});

//반응형 메뉴갯수 보이기
$(window).on("load", function () {
  if (window.innerWidth <= 1024) {
    $(".tablet").addClass("hide");
  } else {
    $(".tablet").removeClass("hide");
  }
});
$(window).on("resize", function () {
  if (window.innerWidth <= 1024) {
    $(".tablet").addClass("hide");
  } else {
    $(".tablet").removeClass("hide");
  }
});
