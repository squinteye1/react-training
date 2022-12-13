//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import DataEntryField from './components/DataEntryField';

function App() {
  const [vatValue, setVatValue] = useState('');
  return (
    <>
      <div className="App">
        <Header />
        <DataEntryField
          title={"Price excl VAT:"}
          value={vatValue}
          setValue={setVatValue}
        />
        <DataEntryField
          title={"Price inc VAT:"}
          value={vatValue}
          setValue={setVatValue}
        />
      </div>
    </>
  );
}

export default App;
