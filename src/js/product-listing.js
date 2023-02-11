import { getParam, loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

loadHeaderFooter();

const category = getParam("category");
const datasource = new ProductData();
const li = document.querySelector(".product-list");
const productlist = new ProductList(category, datasource, li);

productlist.init();
