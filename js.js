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
      item.parentNode.classList.remove("error");
      if (item.name === "Email") {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(item.value)) {
          item.parentNode.classList.remove("error__email");
          return true;
        }
        item.parentNode.insertAdjacentHTML(
          "afterend",
          "<span class='error__msg error__msg--email'> Looks like this is not an email</span>"
        );
        item.parentNode.classList.add("error__email");
      }
    } else {
      if (item.parentNode.classList.contains("error")) return true;
      item.parentNode.classList.add("error");
      item.parentNode.innerHTML += `<span class="error__msg">${item.name} cannot be empty</span>`;
    }
  });
});
