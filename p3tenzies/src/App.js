import './App.css';
import React from 'react';
import  Die from './components/Die.js';
import {nanoid} from "nanoid";
import Confetti from 'react-confetti';

/*
extra features

put real dots  on the dice
track the number of rolls
track the time it tool to win
save you best time to localStorage

solo-project
Quizzical Trivia
requirements:-
2 screen start & questions
pull 5 questions from the Open trivia DB API
tally correct answers
styles and polished
display the score


*/

function App() {
  const [dice,setDice]=React.useState(allnewDice());
  const [tenzies, setTenzies]=React.useState(false);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [stopTimer, setStopTimer] = React.useState(false);

  const [rolls, setRolls] = React.useState(0);
  const [besttime, setBesttime] = React.useState([]);
  const [bestroll, setBestroll] = React.useState([]);
// let besttime=[];let bestroll=[];
// const [gameinfo,setGameinfo]=React.useState(
//   {
//     rolls:0,
//     time:`${minutes} m: ${seconds} s`
//   }
// );


//saving to local storage
React.useEffect(() =>{
  const tbesttime=JSON.parse(localStorage.getItem("besttime"))
  const tbestroll=JSON.parse(localStorage.getItem("bestroll"))
  console.log("obj",besttime,bestroll);
  if(((tbesttime[0]<=minutes) && (tbesttime[1]<seconds)) || [])
  {
  localStorage.setItem("besttime",JSON.stringify([minutes,seconds]));
  //besttime=[];
  setBesttime(tbesttime)
  }
  if(tbestroll< rolls || [])
  {
  localStorage.setItem("bestroll",JSON.stringify(rolls));
setBestroll(tbestroll)
  
  }
  },[stopTimer]);
  
     



// timer
React.useEffect(() => {
  const intervalId = setInterval(() => {
    // Update seconds
    if (!stopTimer) {
    setSeconds(prevSeconds => {
      if (prevSeconds === 59) {
        // If seconds reach 59, reset to 0 and increment minutes
        setMinutes(prevMinutes => prevMinutes + 1);
        return 0;
      } else {
        return prevSeconds + 1;
      }
    });
  }
  }, 1000);

  // Clean up interval on unmount
  return () => clearInterval(intervalId);
}, [stopTimer]); // Run effect only once on mount


//1hr stop
React.useEffect(() => {
  // Check if 1 hour has passed
  if (minutes === 60) {
    // Display alert and reload timer
    alert('Time out!');
    setStopTimer(true);
    window.location.reload(); // Reload the page
  }
}, [minutes]); // Run effect whenever minutes change



//checking for win
  React.useEffect(
    ()=>{
// let check=true;let val=dice[0].value;
//       dice.map(die=>{
//         if(!die.isHeld || die.value!==val)
//         check= false;
      
//       });
const allHeld=dice.every(die=>die.isHeld);
const firstValue=dice[0].value;
const allSameValue=dice.every(die => die.value===firstValue);
if(allHeld && allSameValue)
{
  setTenzies(true);
  setStopTimer(true);
  console.log("You won!")
}
    
    },[dice]
  )
  /*
  to manage two state values we can use effect
const [dice,setDice]=React.useState([
  {
    id:1,
    value:1,
    isHeld:false
  },
  {
    id:2,
    value:2,
    isHeld:false
  },
  {
    id:3,
    value:3,
    isHeld:false
  },
  {
    id:4,
    value:4,
    isHeld:false
  },
  {
    id:5,
    value:5,
    isHeld:false
  },
  {
    id:6,
    value:6,
    isHeld:false
  },
  {
    id:7,
    value:4,
    isHeld:false
  },
  {
    id:8,
    value:3,
    isHeld:false
  },
  {
    id:9,
    value:3,
    isHeld:false
  },
  {
    id:10,
    value:1,
    isHeld:false
  }

]);
*/
//const [arr,setArr]=React.useState(randarray);
  //const [arr,setArr]=React.useState([1,2,3,4,5,6,4,3,3,1]);
// const arr=[1,2,3,4,5,6,4,3,3,1];

function generatenewDie(){
  return{
  id:nanoid(),
  value:Math.floor(Math.random()*6)+1 ,
  isHeld:false
  }
}
function allnewDice(){
  //setRolls(0);
  
  const arr=[];//let i=1;
  // setDice(prev=>{
   // setTenzies(false);
    for(let i=0;i<10;i++){
  //arr[i]=Math.round(Math.random()*6);
arr.push(generatenewDie())
//   {
//   // id:i,
//   id:nanoid(),
//   value:Math.round(Math.random()*6),
//   isHeld:false
// }
  //console.log(arr[i]);
}
return arr;
  // })

}
function rollDice(){
//
setRolls(prevCount=>prevCount+1);
if(!tenzies)
{
setDice(prevArr=> 
  prevArr.map(obj=>{
  //   if(!obj.isHeld)
  //   {
  //     return{
  //       ...obj,
  //       value:Math.floor(Math.random()*6)+1  
  //      } 
  //   }
  //  else
  //  return obj;
  return obj.isHeld? obj: generatenewDie()
  }
)
)
}
else{
  setTenzies(false);
  setDice(allnewDice());
  setRolls(0);
  setMinutes(0);
  setSeconds(0);
  setStopTimer(false);
}
}

function changeHeld(e,id){
  setDice(prevArr=> 
    prevArr.map(obj=>{
     if(obj.id === id )//&& prevArr.obj.value === val)
     {
     return{
      ...obj,
      isHeld:!obj.isHeld
     } 
    }
    else
    return obj
    }
  )
  )
 
  // const obj = e.target;
  // return{
  //       ...obj,
  //       isHeld:!obj.isHeld
  //      } 
  
  //console.log(e.target);
}


// const diceElements=arr.map(die=><Die value={die}/>)
const diceElements=dice.map(
  die=><Die key={die.id} 
  id={die.id} 
  value={die.value} 
  isHeld={die.isHeld} 
  changeHeld={changeHeld}/>)
 // console.log(dice);
  return (
    <div className="App">
      <main>
        {tenzies && <Confetti width={1500}/>}
        {/* <Confetti /> */}
        <div className='Header'>
          <h1>Tenzies</h1>
          <h4>Roll until all dice are the same. 
            Click each die to freeze it at its current value 
            between rolls.
</h4>
        </div>
        <div className='diecont'>
        {/* <Die value={arr[0]}/><Die value={arr[1]}/><Die value={arr[2]}/>
        <Die value={arr[3]}/><Die value={arr[4]}/><Die value={arr[5]}/>
        <Die value={arr[6]}/><Die value={arr[7]}/><Die value={arr[8]}/>
        <Die value={arr[9]}/> */}
        {diceElements}
        </div>

      
       <button onClick={rollDice}>{ tenzies?"New Game":"Roll"}</button>
        

      </main>
      <div className='game-info'>
        {/* <h3>Number of rolls: {gameinfo.rolls}</h3>
        <h3>Time taken: {gameinfo.time}</h3> */}
           <h3>Number of rolls: {rolls}</h3>
        <h3>Time taken: {minutes} m : {seconds} s</h3>
        <br/>
        {/* <h3>Best time: {besttime[0]} m : {besttime[1]} s&nbsp;Best roll: {bestroll[0]}</h3> */}
        <h3>Best time: {besttime[0]} m : {besttime[1]} s&nbsp;Best roll: {bestroll}</h3>
      </div>
    </div>
  );
}

export default App;
