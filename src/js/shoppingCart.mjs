import { getLocalStorage } from "./utils.mjs";

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimaryMedium}"
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

export default class ShoppingCart {
  constructor(key, parentSelector) {
    this.key = key;
    this.parentSelector = parentSelector;
    this.total = 0;
  }
  async init(){
    //get the infor from local storge
    const list = getLocalStorage(this.key);

    //call the function to calculate the cart total
    this.calcCartTotal(list);

    //render the contents of the localStorage in the cart page
    this.renderCartContents(list);
  }

  calcCartTotal(list){
    //gather the amounts from the items in localStorage
    const amounts = list.map((item) => item.FinalPrice);

    //set the total to the amounts total
    this.total = amounts.reduce((sum, item) => sum + item);
   // .reduce documentation...
   // The reducer walks through the array element-by-element, at each step adding the current 
   // array value to the result from the previous step (this result is the running sum of all the
   // previous steps) — until there are no more elements to add. 
   // (developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
   
  

  }

  renderCartContents() {
    const cartItems = getLocalStorage(this.key);
    const htmlItems = cartItems.map((item) => cartItemTemplate(item)); //map items in the cart instead of Object.entries(cartItems)
    document.querySelector(this.parentSelector).innerHTML = htmlItems.join('');
    
    //render out calcCartTotal ---can we style it so that it is justified on the right instead of the left side of the page?
    document.querySelector('#listTotal').innerText += `$${this.total}`;
  }
}