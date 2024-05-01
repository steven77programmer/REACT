import React from "react";
//import { DiVim } from "react-icons/di";

function Die(props){

    const dotPositionMatrix = {
		1: [
			[50, 50]
		],
		2: [
			[20, 20],
			[80, 80]
		],
		3: [
			[20, 20],
			[50, 50],
			[80, 80]
		],
		4: [
			[20, 20],
			[20, 80],
			[80, 20],
			[80, 80]
		],
		5: [
			[20, 20],
			[20, 80],
			[50, 50],
			[80, 20],
			[80, 80]
		],
		6: [
			[20, 20],
			[20, 80],
			[50, 20],
			[50, 80],
			[80, 20],
			[80, 80]
		]
	};  
    // const renderDots = () => {
        const dots = [];let i=0;
        for (const dotPosition of dotPositionMatrix[props.value]) {
        //   dots.push(<div key={i} className={`dot dot-${i+1}`} ></div>);
        dots.push(<div  key={i++} className={`dot`} style={{ 
            '--top': `${dotPosition[0]}%`, 
            '--left': `${dotPosition[1]}%` 
          }}></div>);

         // console.log(i);
        }
    //     return dots;
    //   };
console.log(dots);
return(
    // <div className={"die"+props.isHeld?" selected":""} 
    <div className={props.isHeld?"die selected":"die"} 
    onClick={(e)=>props.changeHeld(e,props.id)}>
        {/* {props.value} */}
        
        {/* {dots.map(dot=>dot)} */}
                {dots}

        </div>
)
}
export default Die;