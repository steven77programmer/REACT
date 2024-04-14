import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js';
import TravelCard from './components/TravelCard.js';
import Traveldata from './components/Traveldata.js';

function App() {
  const TravelElements=Traveldata.map(card=>{
    return <TravelCard
    key={card.title}
    card={card}
    />
  });
  return (
    <div className="App">
      <Navbar/>
      <div className='cardcont'>
      {TravelElements}
      </div>
    </div>
  );
}

export default App;
