import React from 'react';
//import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Counter from './components/Counter.js';
import reportWebVitals from './reportWebVitals';

//practise
/*
function App(){
  // const thingsarray=["thing 1","thing 2"];
 const [thingsarray,setThingsArray] = React.useState(["thing 1","thing 2"]);

  function additem(){
 setThingsArray(prev=>[...prev,`thing ${prev.length+1}`])
    }
  
  const elements=thingsarray.map(thing=><p key={thing}>{thing}</p>)
  return(
    <div>
      <button onClick={additem}>Add item</button>
{elements}
    </div>
  )
}
*/
/*
//add items
function App(){
  // const thingsarray=["thing 1","thing 2"];
  const [things, setThings]=React.useState(["thing 1","thing 2"]);//intialised as an array

  function additem(){
    console.log('add item');
    //thingsarray.push("things "+(thingsarray.length+1));
    const newThingText=`thing ${things.length + 1}`
    setThings(prevState => [...prevState, newThingText])//should return array
   //...prevState -> spreading the array
    // console.log(thingsarray);
    //App();
    }
  
  // const elements=thingsarray.map(thing=>{
    const elements=things.map(thing=>{//array expected as things
    return <p key={thing}>{thing}</p>;
  });
  return(
    <div>
      <button onClick={additem}>Add item</button>
{elements}
    </div>
  )
}
*/
/*
//greeting
function greeting(name){
  const curDate = new Date();
const curTime=curDate.getHours();//getTime gives time form 1970 jan 1
// console.log(curDate)
//curTime=21;
// console.log(curTime);//(1000*60*60*24)
let msg="Good ";
if (curTime>=4 && curTime<12)
msg=msg+"morning";
else if (curTime>=12 && curTime<5+12)
msg=msg+"afternoon";
else if (curTime>=5+12 && curTime<8+12)
msg=msg+"evening";
else
msg=msg+"night";
console.log(msg+","+name);
}
function App(){
  
 // greeting("Bob")
  return(
    <div>
Time
{greeting("Bob")}
    </div>
  )
}
*/
/*
//useState
function App(){
  //we can destructue in while importing see at the top
  //const result=React.useState("Yes")//gets an array
  //as useState return to part one the array and aother the function
  //we can destructure it while recieving itself to make it easier
  //const [result,func]=React.useState("Yes")
  //func used to update the state and convetion to use set and var name
  const [result,setResult]=React.useState(true)
  function handleClick(){
  //   if(result)
  //   setResult(false);
  // else
  // setResult(true);
  setResult(prev=>!prev)
  }

  return(
<div>
    {// <h1>Is state important to know?</h1> }
    <h1>Do I feel like going out tonight?</h1>
<div onClick={handleClick}>
  <h1>{result?"Yes":"No"}</h1>
</div>
  </div>
  )
  
 }
 */


function App()
{
  const [counter,setCounter]=React.useState(0);
  function handleClickplus(){
//setCounter(counter+1)
//better practice is using callback function
// setCounter(function(oldValue){
//   return oldValue+1;
// })
/*
If you ever need the old value of state to help
 you determine the new value of state, you should
 pass a callback functionto your state setter
  function instead of using you state directly.
  This callback function will recieve the old 
  value of state as its parameter, which you can use
   to determine your new value of state
  */
setCounter(prev=>prev+1);
  }
  function handleClickminus(){
// setCounter(counter-1)
// setCounter(function(oldValue){
//   return oldValue-1;
// })  
setCounter(prev=>prev-1);
}
  return (
    <div className="counter">
      <button className="counter--minus" onClick={handleClickminus}>-</button>
      {/* <div className="counter--count">
<h1>{counter}</h1>
      </div> */}
      <Counter
      key={counter}
      number={counter}
      />
<button className="counter--plus" onClick={handleClickplus}>+</button>
    </div>
  )
}

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
