//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import DataEntryField from './components/DataEntryField';
import DisplayField from './components/DisplayField';

function App() {
  const [salePrice, setSalePrice] = useState(0.0);
  const [totalPrice, setTotalPrice] = useState(0.0);
  const [vatToPay, setVatToPay] = useState(20.0);

  const vatRate = 20.0;

  const handleExclPriceChange = (price) => {
    const totalLocalPrice = price * ((vatRate / 100) + 1);
    setSalePrice(price);
    setTotalPrice(totalLocalPrice);
    console.log("handleExclPriceChange");
    updateVatToPay(price, totalLocalPrice);
  }

  const handleIncPriceChange = (price) => {
    const totalLocalPrice = price / (vatRate / 100 + 1);
    setTotalPrice(price);
    setSalePrice(totalLocalPrice);
    console.log("handleExclPriceChange");
    updateVatToPay(totalLocalPrice, price);
  };

  const updateVatToPay = (priceWithoutVAT, priceWithVAT) => {
    setVatToPay(priceWithVAT-priceWithoutVAT)
  }

  return (
    <>
      <div className="App">
        <Header />
        <DataEntryField
          title={"Price excl VAT:"}
          value={salePrice === 0.0 ? "" : salePrice}
          setValue={handleExclPriceChange}
        />
        <DisplayField label={"VAT to Pay"} value={vatToPay} />
        <DataEntryField
          title={"Price inc VAT:"}
          value={totalPrice === 0.0 ? "" : totalPrice}
          setValue={handleIncPriceChange}
        />
      </div>
    </>
  );
}

export default App;
