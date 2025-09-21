import doesUserExist from "./utils/doesUserExist.js";
import doesPassExist from "./utils/doesPassExist.js";
import createLocalstoragData from "./utils/createLocalstoragData.js";
import createLocalstoragLogin from "./utils/createLocalstoragLogin.js";

const hidePass = document.getElementById("hide-icon");
const passwordInput = document.getElementById("passInput");
const formLogin = document.getElementById("form-login");

//========== HidePass ============
let isHide = false;

hidePass.addEventListener("click", () => {
  isHide = !isHide;
  if (isHide) {
    hidePass.classList.remove("fa-eye");
    hidePass.classList.add("fa-eye-slash");
    passwordInput.setAttribute("type", "text");
  } else {
    hidePass.classList.remove("fa-eye-slash");
    hidePass.classList.add("fa-eye");
    passwordInput.setAttribute("type", "password");
  }
});

//============= Form ===================
formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  let elements = e.target.elements;
  let username = elements.namedItem("username").value || "";
  let password = elements.namedItem("password").value || "";

  let userExist = doesUserExist(username);
  let passExist = doesPassExist(username, password);

  if (userExist) {
    if (passExist) {
      createLocalstoragData(username);
      createLocalstoragLogin(username);
      location.replace(`${location.origin}/index.html`);
    } else {
      alert("Incorrect Password!");
    }
  } else {
    alert("Incorrect Username!");
  }
});
