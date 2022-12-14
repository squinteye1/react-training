//import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import Calculator from './components/Calculator';
import {SalesHistory} from './components/SalesHistory';
import { Route, Routes } from "react-router-dom";


function App() {


  return (
    <Container className="p-3 bg-dark">
      <Calculator />

      <Routes>
        <Route path="/sales" element={<SalesHistory />} />

      </Routes>
    </Container>
  );
}

export default App;
