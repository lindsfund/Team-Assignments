import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  // const keys = Object.keys(cartItems);
  // const values = Object.values(cartItems);
  const entries = Object.entries(cartItems);
  
  //for (const key of keys) {console.log(key);}
  
  
  //for (const value of values) {console.log(value);}
  
  
  for(var entry of entries) {
    return entry = `${entry[0]}: ${entry[1]}`;}

  const htmlItems = entry.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
 
  //I think the problem is that the local storage is returning an object instead of an array and .map() can onoy be used on arrays.
  //I'm having an issue getting the object to convert to an array.
  

}
function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
