import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./shoppingCart.mjs";

//commented out wk 06 -- using shoppingCart.mjs to this so it was redundant
// function renderCartContents() {
//   const cartItems = getLocalStorage("so-cart");
//   const htmlItems = Object.entries(cartItems).map((item) =>
//     cartItemTemplate(cartItems)
//   );
//   document.querySelector(".product-list").innerHTML = htmlItems.join("");
// }

// function cartItemTemplate(item) {
//   const newItem = `<li class="cart-card divider">
//   <a href="#" class="cart-card__image">
//     <img
//       src="${item.Image}"
//       alt="${item.Name}"
//     />
//   </a>
//   <a href="#">
//     <h2 class="card__name">${item.Name}</h2>
//   </a>
//   <p class="cart-card__color">${item.Colors[0].ColorName}</p>
//   <p class="cart-card__quantity">qty: 1</p>
//   <p class="cart-card__price">$${item.FinalPrice}</p>
// </li>`;

//   return newItem;
// }
loadHeaderFooter();

const cart = new ShoppingCart("so-cart", ".product-list");
cart.renderCartContents();
