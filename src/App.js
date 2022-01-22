import Quote from './Components/Quote.js';
import './App.css';
import Header from './Components/Header.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Quote ticker="TSLA" />
      <Quote ticker="AMZN" />

    </div>
  );
}

export default App;
