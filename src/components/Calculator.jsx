//import logo from './logo.svg';

import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Header from "./Header";
import DataEntryField from "./DataEntryField";
import DisplayField from "./DisplayField";
import VATField from "./VATField";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

let count = 1;

function Calulator() {
  const [salePrice, setSalePrice] = useState(0.0);
  const [totalPrice, setTotalPrice] = useState(0.0);
  const [vatToPay, setVatToPay] = useState(0.0);
  const [vatRate, updateVATRate] = useState(20.0);

  console.log(`App() called - ${count++}`);

  useEffect(() => {
    console.log("App::VATrate changed");
    handleExclPriceChange(salePrice);
  }, [vatRate]);

  //const vatRate = 20.0;

  const handleExclPriceChange = (price) => {
    const totalLocalPrice = price * (vatRate / 100 + 1);
    setSalePrice(price);
    setTotalPrice(totalLocalPrice);
    //console.log("handleExclPriceChange");
    updateVatToPay(price, totalLocalPrice);
  };

  const handleIncPriceChange = (price) => {
    const totalLocalPrice = price / (vatRate / 100 + 1);
    setTotalPrice(price);
    setSalePrice(totalLocalPrice);
    console.log("handleExclPriceChange");
    updateVatToPay(totalLocalPrice, price);
  };

  const updateVatToPay = (priceWithoutVAT, priceWithVAT) => {
    setVatToPay(priceWithVAT - priceWithoutVAT);
  };

  const handleVATChangeRate = () => {
    handleExclPriceChange(salePrice);
  };

  const changevatRate = (rate) => {
    console.log("App::ChangeVatRate");
    updateVATRate(rate);
  };

  return (
    <>
      <Container className="p-5 mb-4 bg-light rounded-3">
        <Row className="p-1 mb-1 bg-light rounded-3"></Row>
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
      <Outlet />
    </>
  );
}

export default Calulator;
