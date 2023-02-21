import { getParam, loadHeaderFooter } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";

loadHeaderFooter();

const category = getParam("category");
const datasource = new ExternalServices();
const li = document.querySelector(".product-list");
const productlist = new ProductList(category, datasource, li);

productlist.init();
