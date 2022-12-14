import { Col, Container, Row } from "react-bootstrap";
import { SalesHeader } from "./SalesHeader";
import salesDataHistory from "../data/sales.json";
import SaleItem from "./SaleItem.model";
import Sale from "./Sale.jsx";
import Calulator from "./Calculator";



let index = 1;

export const SalesHistory = (props) => {
  const sales = salesDataHistory.map((currentSaleItem) => {
    const newSaleItem = new SaleItem(
      currentSaleItem.salePrice,
      currentSaleItem.totalPrice,
      currentSaleItem.vatToPay,
      currentSaleItem.vatRate,
      currentSaleItem.id
    );
    return <Sale saleItem={newSaleItem} key={newSaleItem.id} />;
  });
  return (
    <>

      <Container className="p-5 mb-4 bg-light rounded-3">
        <Row className="p-1 mb-1 bg-light rounded-3">
          <SalesHeader />
        </Row>
        <Row className="p-1 mb-1 bg-light rounded-3">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Sale Price</th>
                <th>Total Price</th>
                <th>VAT To Pay</th>
                <th>VAT Rate</th>
              </tr>
            </thead>
            <tbody>{sales}</tbody>
          </table>
        </Row>
      </Container>
     
    </>
  );
};
