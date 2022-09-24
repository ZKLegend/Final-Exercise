window.addEventListener("load", function () {
  const isLoggedIn = window.localStorage.getItem("isloggedin");
  console.log("isLoggedIn :>> ", isLoggedIn);
  if (isLoggedIn === "true") {
    document.querySelector(".signupbtn").remove();
    document.querySelector(".loginbtn").remove();
    document.querySelector(".uname a").textContent =
      window.localStorage.getItem("uname");
  }
});
