
const loggedIn = localStorage.getItem("logged-in");
const parsedData = loggedIn ? JSON.parse(loggedIn) : null;
const doesUserExist = parsedData?.username;

const cartContainer = document.getElementById("cart-container");
const cartItemsCon = document.getElementById("cart-items-con");

document.addEventListener("DOMContentLoaded", () => {
  if (doesUserExist) {
    const userData = JSON.parse(localStorage.getItem(doesUserExist) || "{}");
    const cart = userData.cart || [];

    cartContainer.insertAdjacentHTML("afterbegin",`
        <p class="font-rokh font-size-2">Your Cart</p>
      <p class="font-exo2 font-size-1">User name : <span>${doesUserExist}</span></p>
      `)

    cart.length>0 ?
    cart.forEach(({id,name,price,img})=>
    cartItemsCon.insertAdjacentHTML("beforeend",`
        <div class="cart-item">
                <img src="${img}" alt="product"/>
                <p>${name}</p>
                <p>${price.toLocaleString("en-US")}$</p>
                <button onclick="deleteItem(${id})">Delete</button>
            </div>`)) : cartItemsCon.insertAdjacentHTML("beforeend",`
                <p style="color:#000;font-size:1.5rem;margin-top:3.5rem">No product in your cart</p>`)

    let totalPrice  = 0 ;
    cart.forEach((item)=>{
        totalPrice+=item.price;
    })
    cartContainer.insertAdjacentHTML("beforeend",`
        <p>Total : ${cart.length} items, valued at ${totalPrice.toLocaleString("en-US")}$</p>
        <a href="./index.html">Back to Home</a>`)
            
  } else {
    cartContainer.insertAdjacentHTML("beforeend",`
        <p>Login to your account to continue shopping</p>
      <a href="./login.html">Click to sign in to your user panel</a>`)
  }
});
