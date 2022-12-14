//import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import Calculator from './components/Calculator';
import {SalesHistory} from './components/SalesHistory';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';


function App() {


  return (
    <Container className="p-3 bg-dark">
      <Header />
   

      <Routes>
      <Route path="/" element={<Calculator />} >
          <Route path="sales" element={<SalesHistory />} />
      </Route>
      </Routes>
    </Container>
  );
}

export default App;
