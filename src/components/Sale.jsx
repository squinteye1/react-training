import React from "react";
import PropTypes from "prop-types";
import SaleItem from "./SaleItem.model";

const Sale = ({ saleItem }) => {
  return (
    <tr>
      <td>{saleItem.salePrice}</td>
      <td>{saleItem.totalPrice}</td>
      <td>{saleItem.vatToPay}</td>
      <td>{saleItem.vatRate}</td>
    </tr>
  );
};

Sale.propTypes = {
  saleItem: PropTypes.instanceOf(SaleItem),
};

export default Sale;
