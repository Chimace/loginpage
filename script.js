let password = document.querySelector("#pass");
let showIcon = document.querySelector(".show");
let hideIcon = document.querySelector(".hide");
showIcon.addEventListener("click", function (e) {
  if (password.type === "password") {
    password.type = "text";
    showIcon.src = "closedEyes-removebg-preview.png";
  } else {
    password.type = "password";
    showIcon.src = "openEyes-removebg-preview.png";
  }
});
