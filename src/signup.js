function register() {
  const userId = document.querySelector(".userId").value;
  const emailId = document.querySelector(".emailId").value;
  const psw = document.querySelector(".psw").value;
  const pswRepeat = document.querySelector(".psw-repeat").value;
  if (!userId) {
    alert("Ban chua nhap ten nguoi dung");
    return;
  }
  if (!emailId) {
    alert("Ban chua nhap email");
    return;
  }
  if (!psw) {
    alert("Ban chua nhap mat khau");
    return;
  }
  if (!pswRepeat) {
    alert("Ban chua nhap lai mat khau");
    return;
  }
  if (psw != pswRepeat) {
    alert("Mat khau khong trung khop");
    return;
  }
  window.localStorage.setItem("uname", userId);
  window.localStorage.setItem("email", emailId);
  window.localStorage.setItem("psw", psw);
  alert("Ban da dang ky thanh cong");
  window.location.href = "/index.html";
}

window.addEventListener("load", function () {
  document.querySelector(".signupbtn").addEventListener("click", register);
});
