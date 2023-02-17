import ProductData from "./ExternalServices.mjs";
import ProductDetails from "./ProductDetails.mjs";
import ProductList from "./ProductList.mjs";
import { setLocalStorage, getParam, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const category = getParam("category");
const productId = getParam("product");
const listElement = document.querySelector(".product-list");
const dataSource = new ProductData();
const myList = new ProductList(category, dataSource, listElement);
const product = new ProductDetails(productId, dataSource);

product.init();
myList.init();

// --- duplicate code
// function addProductToCart(product) {
//   setLocalStorage("so-cart", product);
// }
// // add to cart button event handler
// async function addToCartHandler(e) {
// --------------  // product is already defined---we need to try to rename without breaking it.
//   const product = await dataSource.findProductById(e.target.dataset.id);

//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);
