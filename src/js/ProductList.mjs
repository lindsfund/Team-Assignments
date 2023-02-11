import {renderListWithTemplate, renderWithTemplate} from './utils.mjs';

function productCardTemplate(product) {
    return `<li class="product-card">
    <a href="/product_pages/index.html?product=${product.Id}">
    <img
      src="${product.Images.PrimaryMedium}"
      alt="Image of ${product.Name}"
    />
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.Name}</h2>
    <p class="product-card__price">$${product.ListPrice}</p></a>
  </li>`
} 
   
export default class ProductList {
constructor(category, dataSource, listElement){
this.category = category;
this.dataSource = dataSource;
this.listElement = listElement;
}
  async init() {
      const list = await this.dataSource.getData(this.category);
      this.renderProductList(list);
      //set the category and the parallel title
      document.querySelector('.title').innerHTML = this.category;
    }
    renderProductList(list) {
      renderListWithTemplate(productCardTemplate, this.listElement, list);
    }
    
}
