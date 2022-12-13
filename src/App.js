import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import DataEntryField from './components/DataEntryField';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <DataEntryField title={"Price excl VAT:"} />
        <DataEntryField title={"Price excl VAT:"} />
      </div>
    </>
  );
}

export default App;
