//============= Menu ==================
const mobileMenuCon = document.getElementById("mobile-menu-con");
const closeMenu = document.querySelector(".dark");
const triggerMenu = document.querySelector(".icon-menu");

triggerMenu.addEventListener("click", () => {
  mobileMenuCon.classList.add("active");
});
closeMenu.addEventListener("click", () => {
  mobileMenuCon.classList.remove("active");
});

// =========================== GoToUp ========================
const gotoup = document.getElementById("gotoup");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    gotoup.classList.add("active");
  } else {
    gotoup.classList.remove("active");
  }
};
gotoup.addEventListener("click", () => {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
});

//====================== login ===================
import products from "./constant/products.js";

const headerIcon = document.getElementById("header-icon");
const productsCon = document.getElementById("products-con");

const loggedin = localStorage.getItem("logged-in");
const parsedData = loggedin ? JSON.parse(loggedin) : null;
const doesUserExist = parsedData?.username;

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  if (doesUserExist) {
    const userData = JSON.parse(localStorage.getItem(doesUserExist) || "{}");
    const cart = userData.cart || [];

    headerIcon.insertAdjacentHTML(
      "beforeend",
      `
      <a onclick = "logout()" href="#"><i class="bx bx-exit"></i></a>
            <a href="../cart.html">
              <i class="bx bx-cart"></i>
              <span id="numOfPro">${cart.length}</span>
            </a> `
            
            
    );


    products.map((product) => {
      productsCon.insertAdjacentHTML(
        "beforeend",
        `
        <article class="product">
            <img src="${product?.img}" alt="product" />
            <p><span>Name</span><span>${product?.name}</span></p>
            <p><span>Price</span><span>${product.price.toLocaleString(
              "en-US"
            )}$</span></p>
            <div class="btn">
              <button onclick = "addToCart(${product.id},'${product.name}',${
          product.price
        },'${product.img}')" class="srcondry-btn">Add To Cart</button>
            </div>
          </article>`
      );
    });
  } else {
    headerIcon.insertAdjacentHTML(
      "beforeend",
      `
      <a href=./login.html class="icon-enter">
                <i class="bx bx-user-plus"></i>
            </a>`
    );

    products.map((product) => {
      productsCon.insertAdjacentHTML(
        "beforeend",
        `
       <article class="product">
            <img src="${product?.img}" alt="product" />
            <p><span>Name</span><span>${product?.name}</span></p>
            <p><span>Price</span><span>${product.price.toLocaleString(
              "en-US"
            )}$</span></p>
            <div class="btn">
              <button onclick = "goToLogin()" class="srcondry-btn">Login To Buy</button>
            </div>
          </article> `
      );
    });
  }
});
