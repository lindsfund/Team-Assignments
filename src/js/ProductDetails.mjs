import { setLocalStorage } from "./utils.mjs";

function productDetailsTemplate(product) {
    return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
      <h2 class="divider">${product.NameWithoutBrand}</h2>
      <img
        class="divider"
        src="${product.Image}"
        alt="${product.NameWithoutBrand}"
      />
      <p class="product-card__price">$${product.FinalPrice}</p>
      <p class="product__color">${product.Colors[0].ColorName}</p>
      <p class="product__description">
      ${product.DescriptionHtmlSimple}
      </p>
      <div class="product-detail__add">
        <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
      </div></section>`;
  }

export default class ProductDetails {
    constructor(productId, dataSource){
        this.productId = productId;
        this.dataSource = dataSource;
        this.product = {};
    }
    async init(){
        //findProductBy Id opromise handle & use dataSource to gert data for the current product
        this.product = await this.dataSource.findProductById(this.productId);

        //after await fill out HTML
        this.renderProductDetails('main');

        //add listener to HTML button don't forget to BIND()
        document.getElementById('addToCart').addEventListener('click', this.addToCart.bind(this));
    }
    addToCart() {
        setLocalStorage('so-cart', this.product);
    }
    renderProductDetails(selector) {
        const element = document.querySelector(selector);
        element.insertAdjacentHTML(
          "afterBegin",
          productDetailsTemplate(this.product)
        );
      }
}