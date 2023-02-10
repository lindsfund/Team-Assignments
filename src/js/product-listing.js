import { loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

const datasource = new ProductData("tents");
const li = document.querySelector(".product-list");
const productlist = new ProductList("tents", datasource, li);
productlist.init();
