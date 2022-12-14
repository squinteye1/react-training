export default class SaleItem {
    
  constructor(salePrice, totalPrice, vatToPay, vatRate, id) {
    this.salePrice = salePrice;
    this.totalPrice = totalPrice;
    this.vatToPay = vatToPay;
    this.vatRate = vatRate;
    this.id = id;
  }
}
