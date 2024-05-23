import React from "react";
// import styles from "./Frame.css";

const Frame = (props) => {
//   return (
//     <div className="frame">
//     <div className="question">How many hearts does octopus have?</div>
//     <div className="optiondiv">
// <div tabIndex="-1" className="options">One</div>
// <div tabIndex="-1" className="options">Two</div>
// <div tabIndex="-1" className="options">Three</div>
// <div tabIndex="-1" className="options">Four</div>
// </div>
//     </div>
//   )
const handleOptionClick = (option) => {
  props.onSelect(props.question, option);
};

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let jumble=props.options.concat(props.correct);
//jumble left
 jumble=shuffle(jumble)
 console.log("j",jumble)
return (
  <div className="frame" >
  <div className="question">{props.question}</div>
  <div className="optiondiv">
  {/* className={`options ${selectedOption === option ? 'selected' : ''}`} */}
{/* <div tabIndex="-1" className="options">{jumble[0]}</div>
<div tabIndex="-1" className="options">{jumble[1]}</div>
<div tabIndex="-1" className="options">{jumble[2]}</div>
<div tabIndex="-1" className="options">{jumble[3]}</div> */}
 {/* {jumble.sort().map((option, index) => (
          <div
            key={index}
            className={`options ${props.selected === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}

          >
            {option}
          </div>
        ))} */}
        {jumble.sort().map((option, index) => {
          let optionClass = 'options';
          if (props.result !== undefined) {
            if (option === props.correct) {
              optionClass += ' correct';
            } else if (option === props.selected) {
              optionClass += ' incorrect';
            }
          }
          return (
            <div
              key={index}
              className={`${optionClass} ${props.selected === option ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          );
        })}
</div>
  </div>
)
};

export default Frame;