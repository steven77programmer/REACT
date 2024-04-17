import React from "react";
import memesData from "../components/memesData";

function Form(){

    function handleClick(){
       // console.log(memesData.data.memes);
        const memes=memesData.data.memes;
        console.log(memes[(Math.floor(Math.random()*memes.length))].url);
    }
    return(
        // <form>
<div className="Form">
<div className="cont">
<div className="topcont">
<span>Top text</span> 
<input type="text"placeholder="Shut up"/>  
</div>
<div className="botcont">
<span>Bottom text</span> 
<input type="text" placeholder="And take my money"/>  
</div>

</div>
{/* <input type="submit" id="submit" value="Get a new meme image 🖼"/> */}
<button id="submit" onClick={handleClick}>Get a new meme image 🖼</button>
</div>
// </form>
    )
}
export default Form; 


