import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";


const dataSource = new ProductData('tents');
const element = document.querySelector('.product-list');
console.log(dataSource); 

const listing = new ProductList('tents', dataSource, element);
console.log(listing);

listing.init();