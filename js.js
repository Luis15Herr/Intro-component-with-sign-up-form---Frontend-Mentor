let firstName = document.querySelector("#name");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  let inputs = document.querySelectorAll(".form input");

  e.preventDefault();
  inputs.forEach((item) => {
    console.log(item.value);
    if (item.value.trim() != "") {
      console.log("un vacio");
      item.parentNode.classList.remove("error");
      if (item.name === "Email") {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(item.value)) {
          item.parentNode.classList.remove("error__email");
          return true;
        }
        if (item.parentNode.classList.contains("error__email")) return;
        item.parentNode.classList.add("error__email");
        item.parentNode.classList.add("error");
      }
    } else {
      item.parentNode.classList.remove("error__email");
      if (item.parentNode.classList.contains("error")) return true;
      item.parentNode.classList.add("error");
    }
  });
});
