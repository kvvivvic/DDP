//More btn
$(document).ready(function () {
  $(".programs>li").hide();
  $(".programs>li").slice(0, 10).show();
});
function more() {
  $(".programs>li").slice(0, 20).show();
}

//메뉴버튼 애니메이션
$(".menu").click(function () {
  $(this).toggleClass("active");
});

//3depth 메뉴
// html dom 이 다 로딩된 후 실행된다.
$(document).ready(function () {
  // menu 클래스 바로 하위에 있는 a 태그를 클릭했을때
  $(".depth3_btn > span").click(function () {
    var submenu = $(this).next("ul");

    // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
    if (submenu.is(":visible")) {
      submenu.slideUp();
    } else {
      submenu.slideDown();
    }
  });
});

$(".menu").click(function () {
  if ($(".all_menu").is(":visible")) {
    $(".all_menu").fadeOut();
  } else {
    $(".all_menu").fadeIn();
  }
});
