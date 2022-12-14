import React, { useState } from "react";
import PropTypes from "prop-types";
import SaleItem from "./SaleItem.model";
import { Link } from "react-router-dom";
import Toast from "react-bootstrap/Toast";

const Sale = ({ saleItem }) => {
  const [showToast, setShowToast] = useState(false);

  const toggleShowToast = () => setShowToast(!showToast);

  const onClickHandler = (event) => {
    let tagName = event.target.tagName;

    if (tagName === "TD") toggleShowToast();
  };

  const slug = `/${saleItem.salePrice}/${saleItem.vatRate}`;

  return (
    <>
      <tr key={saleItem.id} onClick={onClickHandler}>
        <td>
          <Link to={slug}>{saleItem.salePrice}</Link>
        </td>
        <td>
          <Link to={slug}>{saleItem.totalPrice}</Link>
        </td>
        <td>
          <Link to={slug}>{saleItem.vatToPay}</Link>
        </td>
        <td>{saleItem.vatRate}</td>
      </tr>
      <Toast show={showToast} onClose={toggleShowToast}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Sale Item</strong>
          <small>Details</small>
        </Toast.Header>
        <Toast.Body>
          {`${saleItem.salePrice}` +
            " => " +
            `${saleItem.totalPrice}` +
            " => " +
            `${saleItem.vatToPay}`}
        </Toast.Body>
      </Toast>
    </>
  );
};

Sale.propTypes = {
  saleItem: PropTypes.instanceOf(SaleItem),
};

export default Sale;
