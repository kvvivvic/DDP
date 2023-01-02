function form_check() {
  var id = document.getElementById("id");
  var id_val = id.value;
  var id_leng = id_val.length;
  var btn = document.getElementsByClassName("login_btn");
  var pw = document.getElementById("pw");
  var pw_val = pw.value;
  var pw_leng = pw_val.length;

  if (id_val == "") {
    var txt = document.getElementById("err_id");
    txt.innerHTML = "* 아이디를 입력하세요.";
    id.focus();
    return false;
  }
  if (id_leng < 6) {
    var txt = document.getElementById("err_id");
    txt.innerHTML = "* 아이디는 6글자 이상입니다.";
    id.focus();
    return false;
  }
  if (pw_val == "") {
    var txt = document.getElementById("err_pw");
    txt.innerHTML = "* 비밀번호를 입력하세요.";
    pw.focus();
    return false;
  }
  if (pw_leng < 6) {
    var txt = document.getElementById("err_pw");
    txt.innerHTML = "* 비밀번호는 6글자 이상입니다.";
    pw.focus();
    return false;
  }
}
