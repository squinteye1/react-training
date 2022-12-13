import React, { useEffect, useState } from "react";


const VATField = (props) => {

  const [vatRate, updateVATRate] = useState(20);

  const {updatePrices, currentVATRate} = props;

  useEffect(() => {
    updatePrices();
  },[vatRate, updatePrices]);

  return (
    <select 
    value={currentVATRate}
    onChange={(e) => {
      
      updateVATRate(+e.target.value);
      props.vatRateChanged(+e.target.value);
    }}>
      <option value="20">20%</option>
      <option value="15">15%</option>
      <option value="12.5">12.5%</option>
      <option value="0">Excempt</option>
    </select>
  );
}

export default VATField;