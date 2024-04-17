import logo from './logo.svg';
import './App.css';
// import Jokes from './components/Jokes.js';
// import jokesData from './components/JokesData.js'

import Header from './components/Header.js';
import Form from './components/Form.js';
function App() {
  //const colors=["red","orange","yellow","black","blue","green"];
  //const numbers=[1,2,3,4,4,5,5,6];//h3 can added here to by hard coding
  //const num

  // const jokeElements = jokesData.map(joke => {
  //   return <Jokes
  //   setup={joke.setup}
  //   punchline={joke.punchline}
  //   />
  // }
// )
  return (
    // <div>
    //   {colors}<br/>
    //  <h3>{numbers}</h3> 
    // </div>
    <div>
{/* {jokeElements} */}
<Header/>
<Form/>
    </div>

  );
}

export default App;
