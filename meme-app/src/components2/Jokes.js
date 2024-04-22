import React from 'react';


function Joke(props){
    
    const [isShown,setIsShown] = React.useState(false);
function show(){
    setIsShown(prev=>!prev);
}
    return(
        <div className='joke'>
           {props.setup && <h2>Setup: {props.setup}</h2>} 
            
           {/* <p style={isShown?{display:'block'}:{display:'none'}}>Punchline: {props.punchline}</p> */}
           {isShown && <p>Punchline: {props.punchline}</p>}
            <button onClick={show}>
               {isShown?"Hide":"Show"} punchline
                </button>
{/* 
                && used when u want to display an element or dont want to display
                ternary used when u want to display either of the one component
                for complex scenarios use if else or switch case */}

                
            {/* <p>Upvotes: {props.upvotes}</p>
            <p>Downvotes: {props.downvotes}</p>
            <p>Comments: {props.comments && props.comments.join(' ')}</p>
            <p>Ispun: {props.IsPun}</p> */}
        </div>
    )
}
export default Joke;