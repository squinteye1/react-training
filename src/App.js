//import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';

import { useState } from 'react';
import Header from './components/Header';
import DataEntryField from './components/DataEntryField';
import DisplayField from './components/DisplayField';
import VATField from './components/VATField';
import {Col, Row} from 'react-bootstrap';

let count = 1;

function App() {
  const [salePrice, setSalePrice] = useState(0.0);
  const [totalPrice, setTotalPrice] = useState(0.0);
  const [vatToPay, setVatToPay] = useState(0.0);
  const [vatRate, updateVATRate] = useState(20.0)

  console.log(`App() called - ${count++}`)

  //const vatRate = 20.0;

  const handleExclPriceChange = (price) => {
    const totalLocalPrice = price * ((vatRate / 100) + 1);
    setSalePrice(price);
    setTotalPrice(totalLocalPrice);
    //console.log("handleExclPriceChange");
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

  const handleVATChangeRate = () => {
    handleExclPriceChange(salePrice);
  };

  const changevatRate = (rate) => {
    console.log('App::ChangeVatRate');
             updateVATRate(rate);

  }

  return (
    <Container className="p-3 bg-dark">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <Row className="p-1 mb-1 bg-light rounded-3">
          <Header />
        </Row>
        <Row className="p-1 mb-1 bg-light rounded-3">
          <VATField
            vatRateChanged={changevatRate}
            currentVATRate={vatRate}
            updatePrices={handleVATChangeRate}
          />
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
        </Row>
      </Container>
    </Container>
  );
}

export default App;
