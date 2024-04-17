import React from 'react';
//import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
/*
function App(){
  // const thingsarray=["thing 1","thing 2"];
  const [things, setThings]=React.useState(["thing 1","thing 2"]);

  function additem(){
    console.log('add item');
    //thingsarray.push("things "+(thingsarray.length+1));
    const newThingText=`thing ${things.length + 1}`
    setThings(prevState => [...prevState, newThingText])
   // console.log(thingsarray);
    //App();
    }
  
  // const elements=thingsarray.map(thing=>{
    const elements=things.map(thing=>{
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
function App(){
  //we can destructue in while importing see at the top
  //const result=React.useState("Yes")//gets an array
  //as useState return to part one the array and aother the function
  //we can destructure it while recieving itself to make it easier
  //const [result,func]=React.useState("Yes")
  //func used to update the state and convetion to use set and var name
  const [result,setResult]=React.useState("Yes")
  function handleClick(){
    if(result==="Yes")
    setResult("No");
  else
  setResult("Yes");
  }

  return(
<div>
    <h1>Is state important to know?</h1>
<div onClick={handleClick}>
  <h1>{result}</h1>
</div>
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
