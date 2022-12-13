//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import DataEntryField from './components/DataEntryField';

function App() {
  const [exclValue, setexclValue] = useState('');
  const [inclValue, inclValueValue] = useState('');
  return (
    <>
      <div className="App">
        <Header />
        <DataEntryField
          title={"Price excl VAT:"}
          value={exclValue}
          setValue={setexclValue}
        />
        <DataEntryField
          title={"Price inc VAT:"}
          value={inclValue}
          setValue={inclValueValue}
        />
      </div>
    </>
  );
}

export default App;
