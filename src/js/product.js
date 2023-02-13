import { setLocalStorage, getParam, loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import ProductList from "./ProductList.mjs";

loadHeaderFooter();

const category = getParam("category");
const dataSource = new ProductData();
const listElement = document.querySelector(".product-grid");
const myList = new ProductList(category, dataSource, listElement);

myList.init();
const productID = getParam("product");

//console.log(dataSource.findProductById(productID));

const product = new ProductDetails(productID, dataSource);
console.log(product);
product.init();

// --------------------Removed week2 team assignment_ moved to ProductDetails.mjs
// function addProductToCart(product) {
//   setLocalStorage("so-cart", product);
// }
// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);
