module.exports = () => {
  const sales = { sale: [] };
  // Create 10 sales @VAT rate 20%
  let i = 0;
  for (; i < 10; i++) {
    let salePrice = Math.floor(Math.random() * 50) + 50;
    let totalPrice = (salePrice * 1.2).toFixed(2);
    let vatToPay = (totalPrice - salePrice).toFixed(2);
    sales.sale.push({
      id: i,
      salePrice: `${salePrice}`,
      totalPrice: `${totalPrice}`,
      vatToPay: `${vatToPay}`,
      vatRate: 20.0,
    });
  }

  // Create 10 sales @VAT rate 15%
  for (; i < 20; i++) {
    let salePrice = Math.floor(Math.random() * 50) + 100;
    let totalPrice = (salePrice * 1.15).toFixed(2);
    let vatToPay = (totalPrice - salePrice).toFixed(2);
    sales.sale.push({
      id: i,
      salePrice: `${salePrice}`,
      totalPrice: `${totalPrice}`,
      vatToPay: `${vatToPay}`,
      vatRate: 15.0,
    });
  }
  return sales;
};
