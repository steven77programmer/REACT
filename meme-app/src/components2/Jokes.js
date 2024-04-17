import React from 'react';


function Joke(props){
    
    return(
        <div className='joke'>
           {props.setup && <h2>Setup: {props.setup}</h2>} 
            <p>Punchline: {props.punchline}</p>
            <p>Upvotes: {props.upvotes}</p>
            <p>Downvotes: {props.downvotes}</p>
            <p>Comments: {props.comments && props.comments.join(' ')}</p>
            <p>Ispun: {props.IsPun}</p>
        </div>
    )
}
export default Joke;