//import logo from './logo.svg';
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Calculator from './components/Calculator';
import {SalesHistory} from './components/SalesHistory';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import NotFound from './components/NotFound';



function App() {


  return (
    <Container className="p-3 bg-dark">
  

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">YourVAT</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/sales">Sales</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Header />

      <Routes>
        <Route path="/" element={<Calculator />}>
          <Route path="sales" element={<SalesHistory />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/:paramSalePrice/:paramVatRate" element={<Calculator />} />
      </Routes>
    </Container>
  );
}

export default App;
