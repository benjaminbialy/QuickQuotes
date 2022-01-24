import Quote from './Components/Quote.js';
import './App.css';
import Header from './Components/Header.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Quote ticker="TSLA" company__logo="/Tesla_logo.png"/>
      <Quote ticker="NFLX" company__logo="/netflix-logo.png"/>
      <Quote ticker="AMZN" company__logo="/amazon-logo.png"/>
    </div>
  );
}

export default App;
