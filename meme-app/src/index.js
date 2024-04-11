import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Jokes from './components/Jokes.js';
import App from './App';
import reportWebVitals from './reportWebVitals';
// function App(){
// return(
//   <div className='App'>

//    <h1>Meme-App</h1> 
// <Jokes
// setup="A priest, a rabbi and a vicar walk into a bar."
// punchline="The barman says, “Is this some kind of joke?”"
// upvotes={5}
// downvotes={2}
// comments={["hilarious","awesome"]}
// isPun={true}
// />
// <Jokes
// setup="I was in Tesco’s and I saw this man and woman wrapped in a barcode."
// punchline="I said, “Are you two an item?”"
// />
// <Jokes
// setup="I was having dinner with Garry Kasporov (world chess champion) and there was a check tablecloth."
// punchline="It took him two hours to pass me the salt."
// />
// <Jokes

// punchline="It's hard to explain puns to kleptomanics because they always take things literally"
// />
//   </div>
// )
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
