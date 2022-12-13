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
