import React from 'react';
import './App.css';
import  IntroPage from './components/IntroPage.js'
import  QuestionPage from './components/QuestionPage.js'

function App()
{
  const [first,setFirst]=React.useState(false);
  // const [questdata,setQuestdata]=React.useState([]);
  // React.useEffect(()=>
  // {setFirst(false)},[true])
  // React.useEffect(() => {
  //     fetch("https://opentdb.com/api.php?amount=6&category=18&type=multiple")
  //     .then(res=>res.json())
  //     .then(data=>setQuestdata(data.results))
  //   }, []);
  
  return (
 <div className='App'>
    {

    //first?<QuestionPage data={questdata}/>:<IntroPage change={()=>setFirst(true)}/>
    first?<QuestionPage/>:<IntroPage change={()=>setFirst(true)}/>
     
     }
    </div>
);
}
  


export default App;
