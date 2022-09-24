function login() {
  console.log(123);
  const userId = document.querySelector(".userId").value;
  const psw = document.querySelector(".psw").value;
  if (!userId) {
    alert("Ban chua nhap username/email");
    return;
  }
  if (!psw) {
    alert("Ban chua nhap mat khau");
    return;
  }
  if (
    userId != localStorage.getItem("uname") &&
    userId != localStorage.getItem("email")
  ) {
    alert("username/email hoac mat khau ban nhap chua dung");
    return;
  }
  if (psw != localStorage.getItem("psw")) {
    alert("username/email hoac mat khau ban nhap chua dung");
    return;
  }
  alert("Ban da dang nhap thanh cong!");
  localStorage.setItem("isloggedin", true);
  window.location.href = "/index.html";
}

window.addEventListener("load", function () {
  document.querySelector(".loginbtn").addEventListener("click", login);
});
