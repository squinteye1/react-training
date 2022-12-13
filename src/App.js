//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import DataEntryField from './components/DataEntryField';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <DataEntryField title={"Price excl VAT:"} />
      </div>
    </>
  );
}

export default App;
