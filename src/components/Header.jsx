import React from 'react';
import Container from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap';

const Header = () => {
  return (
    <Container className="p-1 mb-1 bg-light rounded-3">
  
      <Row className="">
       <h2>VAT Calculator</h2>
      </Row>
     
    </Container>
  );
}

export default Header