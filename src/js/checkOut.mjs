import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";
loadHeaderFooter();

class CheckoutProcess() {
constructor(key) {
    this.key = key;
    this.list = []
    this.tax = 0;
    this.shipping = 0;
    this.subtotal = 0;
    this.ordertotal = 0;
}
init()
this.list = getLocalStorage(this.key);
this.calculateItemSummary();
}

//calculates and displays subtotal
calculateSubtotal() {
//this.list.map(math.sum(FinalPrice));
let subtotal = this.list.map(math.sum(FinalPrice));
return subtotal;
}